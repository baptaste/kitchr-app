import styles from './index.module.scss';
import PageHead from '../PageHead';
import BaseInput from '../lib/inputs/BaseInput';
import BaseButton from '../lib/buttons/BaseButton';
import Divider from '../Divider';
import BaseLink from '../lib/links/BaseLink';
import { ChangeEvent, useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { supabase } from '../../utils/supabase/supabase';
import { Provider } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { loginWithMagicLink, loginWithProvider } from '../../utils/supabase/login';
import LoginOptions from './LoginOptions';
import { logAny } from '../../utils/logs.utils';
import LoginEmail from './LoginEmail';
import LoginMagicLink from './LoginMagicLink';

export default function Login() {
	const router = useRouter();
	const [loginOption, setLoginOption] = useState({ type: '', opts: null });

	function handleLoginOption(type: string, opts?: any) {
		setLoginOption({ type, opts: opts || null });
	}

	// async function handleLoginOption(): Promise<any | void> {
	// 	if (loginOption.type === 'email') {
	// 		// router.push('/auth/login?=email');
	// 		setLoginOption({ type: 'email', opts: null });
	// 	} else if (loginOption.type === 'provider') {
	// 		// loginWithProvider(opts?.provider);
	// 		setLoginOption({ type: 'provider', opts: loginOption.opts.provider });
	// 	} else if (loginOption.type === 'link') {
	// 		// router.push('/auth/login?=link');
	// 		setLoginOption('link');
	// 	} else {
	// 		return;
	// 	}
	// }

	useEffect(() => {
		logAny('loginOption:', loginOption);
	}, [loginOption]);

	return (
		<form className={`${styles.login}`}>
			<PageHead title='Connexion' />

			{!loginOption.type && <LoginOptions handleLoginOption={handleLoginOption} />}

			{loginOption.type === 'email' && <LoginEmail />}
			{loginOption.type === 'magic-link' && <LoginMagicLink />}

			{/* {!loginOption.type ? (
                <LoginOptions handleLoginOption={handleLoginOption} />
            ) : loginOption.type === 'email' ? (
                <LoginEmail />
            ) : loginOption.type === 'magic-link' ? (
                <LoginMagicLink />
            ) : (

            )} */}

			{/* <div className={`${styles['sign-up__redirect']}`}>
				<p className={`m-standard-font`}>Vous avez déjà un compte ? </p>
				<BaseLink href='/auth/login' text='Connectez-vous' classes='m-color-main m-standard-font-bold' />
			</div> */}
		</form>
	);
}
