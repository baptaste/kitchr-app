import { AuthUser } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import BaseButton from '../../../components/ui/buttons/BaseButton';
import { fetchAPI } from '../../../lib/fetch';
import { logoutUser } from '../../../services/supabase/client/auth/logout.service';
import { logAny, logError } from '../../../utils/logs.utils';
import { IAuthUser } from '../../../utils/supabase/auth/auth';
import { supabase } from '../../../utils/supabase/client/supabase.utils';
import Logout from '../../auth/logout';
import SignOut from '../../auth/sign-out';
import styles from './index.module.scss';

interface IProfileProps extends IAuthUser {}

export default function Profile() {
	const router = useRouter();
	const user = supabase.auth.user();

	useEffect(() => {
		if (!user) {
			router.push('/auth/login');
		}
	}, []);

	return (
		<>
			<div className={`${styles['profile-header']} margin-ver-1`}>
				<h1 className={`${styles['profile-header__email']} title-font color-main text-bold`}>Hello</h1>
				<h1 className={`${styles['profile-header__email']} flex-column title-font color-main text-bold`}>
					{user?.email}
				</h1>
				<div className='flex align-center justify-around margin-ver-1' style={{ width: '55%' }}>
					<p className='m-standard-font-bold color-two'>Status: </p>
					<p className='m-standard-font-bold color-one'> {user?.role}</p>
				</div>
			</div>
			{/* <pre className={`${styles['profile-content']} margin-ver-1`}>{JSON.stringify(user, null, 2)}</pre> */}
			<Logout />
			<SignOut />
		</>
	);
}

// export async function getServerSideProps({ req, res }: any) {
// 	// const { user, error } = await supabase.auth.api.getUserByCookie(req);
// 	// const { user, error } = await supabase.auth.api.getUser(req.accessToken);

// 	const user = supabase.auth.user();

// 	logAny('Profile page, getServerSideProps, user by cookie:', user);
// 	if (!user) {
// 		return { props: {}, redirect: { destination: '/auth/login', permanent: false } };
// 	}
// 	return { props: { auth_user: user } };
// }
