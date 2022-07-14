// import { useUser, getSession } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import LoginComponent from '../../components/Login';
// import SignIn from '../../components/OldSignIn';
// import LoginEmail from '../../components/Login/LoginEmail';
// import SignIn from '../../store/containers/SignIn';
import { logAny } from '../../utils/logs.utils';
import { supabase } from '../../utils/supabase/supabase.utils';

// export default function Login() {
// 	return <SignIn />;
// }

export default function Login() {
	const router = useRouter();
	// const { user } = useUser();

	logAny('router query:', router.query);

	// if (user) {
	// 	logAny('user:', user);
	// 	return router.push('/');
	// }

	// if (router.query) {
	// 	if (Object.values(router.query).at(0) === 'email') {
	// 		return <LoginEmail />;
	// 	}
	// }

	return <LoginComponent />;
}
