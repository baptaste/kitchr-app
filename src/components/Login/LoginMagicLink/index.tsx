import React, { EventHandler, useState } from 'react';
import { signInWithMagicLink } from '../../../utils/supabase/auth/signIn.utils';
import { signUpWithMagicLink } from '../../../utils/supabase/auth/signUp.utils';
import BaseButton from '../../lib/buttons/BaseButton';
import BaseInput from '../../lib/inputs/BaseInput';

interface ILoginMagicLinkState {
	email: string;
	message: string | any;
	emailSent: boolean;
	error: boolean;
}

interface ILoginEmailProps {
	isRegistering?: boolean;
}

export default function LoginMagicLink({ isRegistering }: ILoginEmailProps) {
	const [loginState, setLoginState] = useState<ILoginMagicLinkState>({
		email: '',
		message: '',
		emailSent: false,
		error: false,
	});

	function handleChange(event: any): void {
		setLoginState({ ...loginState, email: event.target.value });
	}

	async function handleLogin() {
		let supabaseError;
		if (isRegistering) {
			const { error }: any = await signUpWithMagicLink(loginState.email);
			supabaseError = error;
		} else {
			const { error }: any = await signInWithMagicLink(loginState.email);
			supabaseError = error;
		}
		if (supabaseError) {
			return setLoginState({ ...loginState, error: true, message: supabaseError });
		}
		setLoginState({
			...loginState,
			emailSent: true,
			message: `Un lien ${isRegistering ? "d'inscription" : 'de connexion'} a été envoyé à votre adresse mail.`,
		});
	}

	return (
		<>
			{loginState.error && <p className='m-color-error m-standard-font m-standard-font'>{loginState.message}</p>}
			{loginState.emailSent && <p className='m-color-main m-standard-font m-standard-font'>{loginState.message}</p>}

			<BaseInput
				inputType='email'
				inputName='email'
				labelText='Email*'
				placeholder='email@exemple.com'
				required
				inputValue={loginState.email || ''}
				onChange={handleChange}
			/>

			<BaseButton onClick={handleLogin} text='Recevoir mon lien magique' classes='m-bg-main m-color-light' />
		</>
	);
}
