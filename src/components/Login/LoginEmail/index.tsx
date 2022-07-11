import React, { EventHandler, useState } from 'react';
import { loginWithEmail } from '../../../utils/supabase/login';
import { supabase } from '../../../utils/supabase/supabase';
import BaseButton from '../../lib/buttons/BaseButton';
import BaseInput from '../../lib/inputs/BaseInput';

interface ILoginEmailState {
	email: string;
	password: string;
	message: string;
	error: boolean;
}

export default function LoginEmail() {
	const [loginState, setLoginState] = useState<ILoginEmailState>({
		email: '',
		password: '',
		message: '',
		error: false,
	});

	function handleChange(event: any): void {
		setLoginState({
			...loginState,
			[event.target.name]: event.target.value,
		});
	}

	async function handleLogin() {
		const error = await loginWithEmail(loginState.email, loginState.password);
		if (error) {
			return setLoginState({ ...loginState, error: true, message: error });
		}
	}

	return (
		<>
			<BaseInput
				inputType='email'
				inputName='email'
				labelText='Email*'
				placeholder='email@exemple.com'
				required
				inputValue={loginState.email || ''}
				onChange={handleChange}
			/>

			<BaseInput
				inputType='password'
				inputName='password'
				labelText='Mot de passe*'
				placeholder='Min. 8 charactères'
				required
				inputValue={loginState.password || ''}
				onChange={handleChange}
			/>

			<BaseButton onClick={handleLogin} text='Se connecter' classes='m-bg-main m-color-light' />
		</>
	);
}
