import styles from './index.module.scss';
import PageHead from '../PageHead';
import BaseInput from '../ui/inputs/BaseInput';
import BaseButton from '../ui/buttons/BaseButton';
import Divider from '../Divider';
import BaseLink from '../ui/links/BaseLink';
import { ChangeEvent, useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { supabase } from '../../utils/supabase/supabase.utils';
import { Provider } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { signInWithMagicLink, signInWithProvider } from '../../utils/supabase/auth/signIn.utils';
import { logAny } from '../../utils/logs.utils';
import LoginOptions from '../Login/LoginOptions';
import LoginEmail from '../Login/LoginEmail';
import LoginMagicLink from '../Login/LoginMagicLink';

export default function Signup() {
	const router = useRouter();
	const [signupOption, setSignupOption] = useState({ type: '', opts: null });

	function handleSignupOption(type: string, opts?: any) {
		setSignupOption({ type, opts: opts || null });
	}

	useEffect(() => {
		logAny('signupOption:', signupOption);
	}, [signupOption]);

	return (
		<form className={`${styles['sign-up']}`}>
			<PageHead title='Inscription' />

			{!signupOption.type && <LoginOptions handleLoginOption={handleSignupOption} isRegistering={true} />}

			{signupOption.type === 'email' && <LoginEmail isRegistering={true} />}
			{signupOption.type === 'magic-link' && <LoginMagicLink isRegistering={true} />}

			<Divider text='' />

			<div className={`${styles['sign-up__redirect']}`}>
				<p className={`m-standard-font`}>Vous avez déjà un compte ? </p>
				<BaseLink href='/auth/login' text='Connectez-vous' classes='m-color-main m-standard-font-bold' />
			</div>
		</form>
	);
}
