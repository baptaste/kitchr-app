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
import { loginWithEmail, loginWithMagicLink, loginWithProvider } from '../../../services/supabase/auth/login.service';
import { KITCHR_CLIENT_ENTRYPOINT } from '../../../utils/constants/endpoints.utils';
import { logAny, logError } from '../../../utils/logs.utils';
import { supabase } from '../../../utils/supabase/supabase.utils';
import styles from './index.module.scss';

interface IFormDataState {
	[key: string]: string;
}

export default function Login() {
	const router = useRouter();

	const [authOption, setAuthOption] = useState({
		type: '',
		provider: '',
	});

	const [isPasswordRevealed, setIsPasswordRevealed] = useState<boolean>(false);
	const [submitButtonText, setSubmitButtonText] = useState<string>('Se connecter');
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

	function handleAuthOptionSelected(type: string, provider?: Provider) {
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
			loginWithProvider(authOption.provider as Provider)
				.then((res) => logAny(`login with ${authOption.provider}, res:`, res))
				.catch((error) => logError(error));
		}
		return () => {
			setSubmitButtonText('Se connecter');
		};
	}, [authOption]);

	async function handleSubmit() {
		logAny('Login page | handleSubmit');
		//TODO check if all fields are filled and correct
		if (authOption.type === 'email') {
			const { session, error } = await loginWithEmail(formData.email, formData.password);
			if (error) {
				return setError("Une erreur est servenue, vous n'avez pas pu être déconnecté.");
			}
			logAny('Login page | supabase.auth.signIn, session:', session);
			if (session) {
				router.push('/');
			}
		} else if (authOption.type === 'magic-link') {
			const { error } = await loginWithMagicLink(formData.email);
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

	return (
		<div className={`${styles['login']}`}>
			<PageHead title='Connexion' />

			<Form onSubmit={authOption && handleSubmit}>
				{!authOption.type && <AuthOptions onClick={handleAuthOptionSelected} isRegistering={false} />}

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

				{authOption.type !== '' && <BaseButton type='submit' text={submitButtonText} classes='m-bg-main m-color-light' />}

				{error && <p className='m-margin-ver-1 color-error text-bold'>{error}</p>}

				<Divider text='' />

				<div className={`${styles['login__redirect']}`}>
					<p className={`m-standard-font`}>Vous n'avez pas de compte ?</p>
					<BaseLink href='/auth/register' text='Créér un compte' classes='m-color-main m-standard-font-bold' />
				</div>
			</Form>
		</div>
	);
}
