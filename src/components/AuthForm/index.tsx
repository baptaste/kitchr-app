import { Provider } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
	loginWithEmailPassword,
	registerOrLoginWithProvider,
	sendMagicLinkEmail,
	sendResetPasswordEmail,
} from '../../services/supabase/client/auth/login.service';
import { registerWithEmailPassword } from '../../services/supabase/client/auth/register.service';
import { WELCOME_PAGE_ENDPOINT } from '../../utils/constants/endpoints.utils';
import { logAny, logError } from '../../utils/logs.utils';

import BaseButton from '../ui/buttons/BaseButton';
import BaseInput from '../ui/inputs/BaseInput';
import PasswordInput from '../ui/inputs/PasswordInput';
import type { IAuthOptionState, IFormDataState } from './AuthForm.d';
import AuthOptions from './AuthOptions';

export default function AuthForm({ registering = false }): JSX.Element {
	const router = useRouter();

	const [isPasswordRevealed, setIsPasswordRevealed] = useState<boolean>(false);
	const [submitButtonText, setSubmitButtonText] = useState<string>('Se connecter');
	const [forgottenPassword, setForgottenPassword] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const baseErrorMsg: string = 'Une erreur est servenue, nous avons rencontré un problème lors de ';

	const [authOption, setAuthOption] = useState<IAuthOptionState>({
		type: '',
		provider: '',
	});

	const [formData, setFormData] = useState<IFormDataState>({
		email: '',
		password: '',
	});

	function handleChange(e: any): void {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	function handleAuthOptionSelected(type: string, provider?: Provider) {
		setAuthOption({ type, provider: provider ?? '' });
		handleSubmit();
	}

	function togglePasswordRevealed() {
		setIsPasswordRevealed(!isPasswordRevealed);
	}

	function handleForgottenPassword() {
		setForgottenPassword(true);
	}

	async function handleSubmit(event?: any) {
		if (event) event.preventDefault();

		if (authOption.type === 'email' && formData.email !== '') {
			logAny('AuthForm | handleSubmit - if authOption.type === email');
			if (!registering && router.pathname === '/auth/login') {
				await handleLoginSubmit();
			} else {
				await handleRegisterSubmit();
			}
		}

		if (authOption.type === 'provider' && authOption.provider !== '') {
			logAny('AuthForm | handleSubmit - if authOption.type === provider');
			await registerOrLoginWithProvider(authOption.provider as Provider);
		}

		if (authOption.type === 'magic-link') {
			logAny('AuthForm | handleSubmit - if authOption.type === magic-link');
			const { error } = await sendMagicLinkEmail(formData.email);
			if (error) {
				logError(error);
				return setError(baseErrorMsg + "l'envoi de votre mail de connexion.");
			}
			if (error == null) {
				logAny('sendMagicLinkEmail, email sent successfully');
				router.push(WELCOME_PAGE_ENDPOINT + formData.email);
			}
		}
	}

	async function handleLoginSubmit() {
		logAny('AuthForm | handleLoginSubmit');
		//TODO check if all fields are filled correctly
		const { session, error } = await loginWithEmailPassword(formData.email, formData.password);
		if (error) {
			return setError(baseErrorMsg + 'votre connexion.');
		}
		if (session) {
			logAny('loginWithEmailPassword, session:', session);
			router.push('/');
		}
		if (forgottenPassword) {
			const { error } = await sendResetPasswordEmail(formData.email);
			if (error != null) {
				logError(error);
				return setError(baseErrorMsg + "l'envoi de votre mail de rénitialisation du mot de passe.");
			}
			logAny('handleLoginSubmit | reset password, email sent successfully');
			router.push(WELCOME_PAGE_ENDPOINT + formData.email + 'reset_pw=true');
		}
	}

	async function handleRegisterSubmit() {
		logAny('AuthForm | handleRegisterSubmit');
		const { session, error } = await registerWithEmailPassword(formData.email, formData.password);
		if (error) {
			logError(error);
			return setError("Une erreur est servenue, vous n'avez pas pu être déconnecté.");
		}
		if (session) {
			logAny('registerWithEmailPassword, session:', session);
			router.push(WELCOME_PAGE_ENDPOINT + formData.email);
		}
	}

	useEffect(() => {
		logAny('registering:', registering);
		logAny('authOption:', authOption);

		if (authOption.type === 'magic-link') {
			setSubmitButtonText('Recevoir mon lien magique !');
		} else if (authOption.type === 'email' && forgottenPassword) {
			setSubmitButtonText('Réinitialiser mon mot de passse');
		} else {
			return;
		}
		return () => {
			setSubmitButtonText('Se connecter');
		};
	}, [authOption]);

	return (
		<form onSubmit={handleSubmit}>
			{!authOption.type && <AuthOptions onClick={handleAuthOptionSelected} registering={registering} />}

			{authOption.type === 'email' && (
				<>
					<BaseInput
						type='email'
						name='email'
						labelText='Email*'
						placeholder='email@exemple.com'
						required
						onChange={handleChange}
					/>
					{!forgottenPassword && (
						<PasswordInput
							type='password'
							name='password'
							labelText='Mot de passe*'
							placeholder='Min. 8 charactères'
							required
							isPasswordRevealed={isPasswordRevealed}
							togglePasswordRevealed={togglePasswordRevealed}
							onChange={handleChange}
						/>
					)}
					{router.pathname === '/auth/login' && !registering && (
						<BaseButton
							text='Mot de passe oublié'
							textClass='text-underline'
							classes='bg-none'
							onClick={handleForgottenPassword}
						/>
					)}
				</>
			)}

			{authOption.type === 'magic-link' && (
				<BaseInput
					type='email'
					name='email'
					labelText='Email*'
					placeholder='email@exemple.com'
					required
					onChange={handleChange}
				/>
			)}

			{authOption.type !== '' && <BaseButton type='submit' text={submitButtonText} classes='bg-one color-three' />}

			{error && <p className='margin-ver-1 color-five text-bold'>{error}</p>}
		</form>
	);
}
