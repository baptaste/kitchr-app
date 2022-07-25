import { Provider } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Divider from '../../../components/Divider';
import Form from '../../../components/Form';
import AuthOptions from '../../../components/Form/AuthOptions';
import Input from '../../../components/Form/Input';
import PasswordInput from '../../../components/Form/PasswordInput';
import PageHead from '../../../components/PageHead';
import BaseButton from '../../../components/ui/buttons/BaseButton';
import BaseLink from '../../../components/ui/links/BaseLink';
import { fetchAPI } from '../../../lib/fetch';
import { registerWithEmail, registerWithMagicLink, registerWithProvider } from '../../../services/supabase/auth/register.service';
import { KITCHR_CLIENT_ENTRYPOINT } from '../../../utils/constants/endpoints.utils';
import { logAny, logError } from '../../../utils/logs.utils';

import styles from './index.module.scss';

interface IFormDataState {
	[key: string]: string;
}

export default function Register() {
	const router = useRouter();

	const [authOption, setAuthOption] = useState({
		type: '',
		provider: '',
	});

	const [isPasswordRevealed, setIsPasswordRevealed] = useState<boolean>(false);
	const [submitButtonText, setSubmitButtonText] = useState<string>("S'inscrire");
	const [error, setError] = useState<string>('');

	const [formData, setFormData] = useState<IFormDataState>({
		email: '',
		password: '',
	});

	//message: '',
	//error: false,

	function handleChange(e: any): void {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	function handleAuthOptionSelected(type: string, provider?: string) {
		setAuthOption({ type, provider: provider ?? '' });
	}

	function togglePasswordRevealed() {
		setIsPasswordRevealed(!isPasswordRevealed);
	}

	useEffect(() => {
		logAny('authOption:', authOption);
		if (authOption.type === 'magic-link') {
			return setSubmitButtonText('Recevoir mon lien magique !');
		}
		if (authOption.type === 'provider' && authOption.provider !== '') {
			registerWithProvider(authOption.provider as Provider)
				.then((res) => logAny(`login with ${authOption.provider}, res:`, res))
				.catch((error) => logError(error));
		}
		return () => {
			setSubmitButtonText("S'inscrire");
		};
	}, [authOption]);

	async function handleSubmit() {
		//TODO check if all fields are filled and correct
		if (authOption.type === 'email') {
			const { session, user, error } = await registerWithEmail(formData.email, formData.password);
			logAny('Register page | registerWithEmail, session:', session);
			if (error) {
				return setError("Une erreur est servenue, vous n'avez pas pu être déconnecté.");
			}
			if (session && user) {
				const welcomePage = `${KITCHR_CLIENT_ENTRYPOINT}/welcome?user_email=${user.email}`;
				router.push(welcomePage);
			}
		} else if (authOption.type === 'magic-link') {
			const { error } = await registerWithMagicLink(formData.email);
			if (error) {
				return setError("Une erreur est servenue, vous n'avez pas pu être déconnecté.");
			}
			if (error == null) {
				const welcomePage = `${KITCHR_CLIENT_ENTRYPOINT}/welcome?user_email=${formData.email}`;
				router.push(welcomePage);
			}
		} else {
			return;
		}
	}

	useEffect(() => {
		logAny('Login page | formData:', formData);
	}, [formData]);

	return (
		<div className={`${styles['register']}`}>
			<PageHead title='Inscription' />

			<Form onSubmit={authOption && handleSubmit}>
				{!authOption.type && <AuthOptions onClick={handleAuthOptionSelected} isRegistering={true} />}

				{authOption.type === 'email' && (
					<>
						<Input
							type='email'
							name='email'
							labelText='Email*'
							placeholder='email@exemple.com'
							required
							onChange={handleChange}
						/>
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
					</>
				)}

				{authOption.type === 'magic-link' && (
					<Input
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

				<Divider text='' />

				<div className={`${styles['register__redirect']} flex-column`}>
					<p className={`m-standard-font`}>Vous avez déjà un compte ?</p>
					<BaseLink href='/auth/login' text='Se connecter' classes='color-one m-standard-font-bold' />
				</div>
			</Form>
		</div>
	);
}
