import { ChangeEvent, useState } from 'react';
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

interface ISignInState {
	email: string;
	password: string;
	emailError: boolean;
	passwordError: boolean;
	errorMessage: string;
}

export default function SignIn(): JSX.Element {
	const [state, setState] = useState<ISignInState>({
		email: '',
		password: '',
		emailError: false,
		passwordError: false,
		errorMessage: '',
	});

	function inputChangeHandler(event: ChangeEvent<HTMLInputElement>, stateKey: string): void {
		const cleanNewValue = DOMPurify.sanitize(event.target.value, { ALLOWED_TAGS: ['em', 'strong'] });
		return setState({ ...state, [stateKey]: cleanNewValue });
	}

	function buttonClickHandler(): void {
		const isEmailValid = validateInput({ pattern: patterns.email, value: state.email });
		const isPasswordValid = validateInput({ pattern: patterns.password, value: state.password });
		logAny('isEmailValid:', isEmailValid);
		logAny('isPasswordValid:', isPasswordValid);
		if (!isEmailValid) {
			return setState({ ...state, emailError: true });
		}
		if (!isPasswordValid) {
			return setState({ ...state, passwordError: true });
		}
		return;
	}

	logAny('[SIGN_IN] state:', state);

	return (
		<div className={`${styles['sign-in']}`}>
			<PageHead title='Connexion' />
			<p className='m-standard-font margin-bottom-1'>Entrez votre email et mot de passe pour vous connecter!</p>
			<div className={`${styles['sign-in__inputs-wrapper']} flex-column margin-ver-1 `}>
				<BaseInput
					inputName='email'
					labelText='Email*'
					placeholder='email@exemple.com'
					required
					inputValue={state.email}
					onChange={(e) => inputChangeHandler(e, 'email')}
				/>
				<BaseInput
					inputName='password'
					labelText='Mot de passe*'
					placeholder='Min. 8 charactères'
					required
					inputValue={state.password}
					onChange={(e) => inputChangeHandler(e, 'password')}
				/>
			</div>
			<BaseButton onClick={buttonClickHandler} text='Se connecter' classes='bg-one color-three' />
			<Divider text='ou' />
			<BaseButton onClick={buttonClickHandler} text='Se connecter avec Google' classes='bg-two color-three' />
			<Divider text='' />
			<div className={`${styles['sign-in__redirect']} flex`}>
				<p className={`m-standard-font`}>Vous n'avez pas de compte ? </p>
				<BaseLink href='/auth/register' text='Créér un compte' classes='color-one m-standard-font-bold' />
			</div>
		</div>
	);
}
