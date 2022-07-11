import React, { EventHandler, useState } from 'react';
import { loginWithMagicLink } from '../../../utils/supabase/login';
import BaseButton from '../../lib/buttons/BaseButton';
import BaseInput from '../../lib/inputs/BaseInput';

interface ILoginMagicLinkState {
	email: string;
	message: string;
	emailSent: boolean;
	error: boolean;
}

export default function LoginMagicLink() {
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
		const error = await loginWithMagicLink(loginState.email);
		if (error) {
			return setLoginState({ ...loginState, error: true, message: error });
		}
		setLoginState({
			...loginState,
			emailSent: true,
			message: 'Un lien de connexion a été envoyé à votre adresse mail.',
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
