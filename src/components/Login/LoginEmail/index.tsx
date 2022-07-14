import React, { EventHandler, useEffect, useState } from 'react';
import { logAny } from '../../../utils/logs.utils';
import { signInWithEmailPassword } from '../../../utils/supabase/auth/signIn.utils';
import { signUpWithEmailPassword } from '../../../utils/supabase/auth/signUp.utils';
import BaseButton from '../../lib/buttons/BaseButton';
import BaseInput from '../../lib/inputs/BaseInput';

interface ILoginEmailState {
	email: string;
	password: string;
	message: string | any;
	error: boolean;
}

interface ILoginEmailProps {
	isRegistering?: boolean;
}

export default function LoginEmail({ isRegistering }: ILoginEmailProps) {
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
		logAny('on passe bien dans handleLogin, registering ?', isRegistering);
		let supabaseError;
		if (isRegistering) {
			const { error }: any = await signUpWithEmailPassword(loginState.email, loginState.password);
			supabaseError = error;
		} else {
			const { error }: any = await signInWithEmailPassword(loginState.email, loginState.password);
			supabaseError = error;
		}
		if (supabaseError) {
			return setLoginState({ ...loginState, error: true, message: supabaseError });
		}
	}

	useEffect(() => {
		logAny('loginState:', loginState);
	}, [loginState]);

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

			<BaseButton
				onClick={handleLogin}
				text={isRegistering ? "S'inscrire" : 'Se connecter'}
				classes='m-bg-main m-color-light'
			/>
		</>
	);
}
