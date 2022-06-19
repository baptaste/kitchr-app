import { ChangeEvent, useState, useReducer, Dispatch, FormEvent } from 'react';
import DOMPurify from 'dompurify';
import { logAny } from '../../utils/logs.utils';
import Divider from '../Divider';
import BaseButton from '../lib/buttons/BaseButton';
import BaseInput from '../lib/inputs/BaseInput';
import PageHead from '../PageHead';
import styles from './index.module.scss';
import { IPatterns, patterns } from '../../utils/constants/patterns.utils';
import { validateInput } from '../../utils/validate.utils';
import BaseLink from '../lib/links/BaseLink';
import { IAuthState } from '../../store/interfaces/auth';

interface ISignupProps extends IAuthState {
	setAuthStateInputValue: (key: string, value: string) => void;
	setAuthStateSubmitted: (value: boolean) => void;
}

export default function Signup({
	email,
	password,
	userName,
	emailError,
	passwordError,
	emailErrorMessage,
	passwordErrorMessage,
	submitted,
	setAuthStateInputValue,
	setAuthStateSubmitted,
}: ISignupProps): JSX.Element {
	//
	function inputChangeHandler(event: ChangeEvent<HTMLInputElement>): void {
		const stateKey: string = event.target.name;
		const cleanNewValue: string = DOMPurify.sanitize(event.target.value, { ALLOWED_TAGS: ['em', 'strong'] });
		setAuthStateInputValue(stateKey, cleanNewValue);
	}

	// function verifyFields() {
	// 	const isEmailValid = validateInput({ pattern: patterns.email, value: email });
	// 	const isPasswordValid = validateInput({ pattern: patterns.password, value: password });
	// 	logAny('isEmailValid:', isEmailValid);
	// 	logAny('isPasswordValid:', isPasswordValid);
	// 	if (isEmailValid && isPasswordValid) {
	// 		return setState({
	// 			...state,
	// 			emailError: false,
	// 			passwordError: false,
	// 			emailErrorMessage: '',
	// 			passwordErrorMessage: '',
	// 		});
	// 	}

	// 	if (!isEmailValid && isPasswordValid) {
	// 		return setState({
	// 			...state,
	// 			emailError: true,
	// 			emailErrorMessage: "Le format d'adresse email n'est pas valide.",
	// 			passwordError: false,
	// 			passwordErrorMessage: '',
	// 		});
	// 	}
	// 	if (!isPasswordValid && isEmailValid) {
	// 		return setState({
	// 			...state,
	// 			passwordError: true,
	// 			passwordErrorMessage: "Le format de mot de passe n'est pas valide.",
	// 			emailError: false,
	// 			emailErrorMessage: '',
	// 		});
	// 	}
	// 	if (!isPasswordValid && !isEmailValid) {
	// 		return setState({
	// 			...state,
	// 			emailError: true,
	// 			emailErrorMessage: "Le format d'adresse email n'est pas valide.",
	// 			passwordError: true,
	// 			passwordErrorMessage: "Le format de mot de passe n'est pas valide.",
	// 		});
	// 	}
	// }

	function buttonClickHandler(event: FormEvent): void {
		event.preventDefault();
		logAny('submitted !!');
		setAuthStateSubmitted(true);
		// verifyFields();
	}

	return (
		<form className={`${styles['sign-up']}`}>
			<PageHead title='Inscription' />
			<p className='m-standard-font m-margin-bottom-1'>Entrez votre email et mot de passe pour vous inscrire!</p>
			<div className={`${styles['sign-up__inputs-wrapper']} m-flex-column m-margin-ver-1 `}>
				<BaseInput
					inputType='email'
					inputName='email'
					labelText='Email*'
					placeholder='email@exemple.com'
					required
					inputValue={email}
					onChange={inputChangeHandler}
				/>
				{emailError && <p className='m-color-error m-standard-font m-small-font'>{emailErrorMessage}</p>}
				<BaseInput
					inputType='password'
					inputName='password'
					labelText='Mot de passe*'
					placeholder='Min. 8 charactères'
					required
					inputValue={password}
					onChange={inputChangeHandler}
				/>
				{passwordError && <p className='m-color-error m-standard-font m-small-font'>{passwordErrorMessage}</p>}
				<BaseInput
					inputType='text'
					inputName='userName'
					labelText='Comment doit-on vous appeler ?'
					placeholder='Ex: Julie Danstépensé'
					inputValue={userName}
					onChange={inputChangeHandler}
				/>
			</div>
			<BaseButton onClick={buttonClickHandler} text="S'inscrire" classes='m-bg-main m-color-light' />
			<Divider text='ou' />
			<BaseButton onClick={buttonClickHandler} text="S'inscrire avec Google" classes='m-bg-dark m-color-light' />
			<Divider text='' />
			<div className={`${styles['sign-up__redirect']}`}>
				<p className={`m-standard-font`}>Vous avez déjà un compte ? </p>
				<BaseLink href='/auth/login' text='Connectez-vous' classes='m-color-main m-standard-font-bold' />
			</div>
		</form>
	);
}