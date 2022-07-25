import { ChangeEvent, useState, useReducer, Dispatch, FormEvent } from 'react';
import DOMPurify from 'dompurify';
import { logAny } from '../../utils/logs.utils';
import Divider from '../Divider';
import BaseButton from '../ui/buttons/BaseButton';
import BaseInput from '../ui/inputs/BaseInput';
import PageHead from '../PageHead';
import styles from './index.module.scss';
import { IPatterns, patterns } from '../../utils/constants/patterns.utils';
import { validateInput } from '../../utils/validate.utils';
import BaseLink from '../ui/links/BaseLink';
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
			<p className='m-standard-font margin-bottom-1'>Entrez votre email et mot de passe pour vous inscrire!</p>
			<div className={`${styles['sign-up__inputs-wrapper']} flex-column margin-ver-1 `}>
				<BaseInput
					inputType='email'
					inputName='email'
					labelText='Email*'
					placeholder='email@exemple.com'
					required
					inputValue={email}
					onChange={inputChangeHandler}
				/>
				{emailError && <p className='color-five m-standard-font m-small-font'>{emailErrorMessage}</p>}
				<BaseInput
					inputType='password'
					inputName='password'
					labelText='Mot de passe*'
					placeholder='Min. 8 charactères'
					required
					inputValue={password}
					onChange={inputChangeHandler}
				/>
				{passwordError && <p className='color-five m-standard-font m-small-font'>{passwordErrorMessage}</p>}
				<BaseInput
					inputType='text'
					inputName='userName'
					labelText='Comment doit-on vous appeler ?'
					placeholder='Ex: Julie Danstépensé'
					inputValue={userName}
					onChange={inputChangeHandler}
				/>
			</div>
			<BaseButton onClick={buttonClickHandler} text="S'inscrire" classes='bg-one color-three' />
			<Divider text='ou' />
			<BaseButton onClick={buttonClickHandler} text="S'inscrire avec Google" classes='bg-two color-three' />
			<Divider text='' />
			<div className={`${styles['sign-up__redirect']}`}>
				<p className={`m-standard-font`}>Vous avez déjà un compte ? </p>
				<BaseLink href='/auth/login' text='Connectez-vous' classes='color-one m-standard-font-bold' />
			</div>
		</form>
	);
}
