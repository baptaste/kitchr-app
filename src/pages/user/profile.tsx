import { AuthUser } from '@supabase/supabase-js';
import { logAny, logError } from '../../utils/logs.utils';
import { IAuthUser } from '../../utils/supabase/auth/auth';
import { supabase } from '../../utils/supabase/supabase.utils';

interface IProfileProps extends IAuthUser {}

export default function Profile({ auth_user }: IProfileProps) {
	logAny('Profile component, user from cookie:', auth_user);

	return (
		auth_user && (
			<div>
				<p>User id: {auth_user.id}</p>
				<p>User role: {auth_user.role}</p>
				<p>User confirmed_at: {auth_user.confirmed_at}</p>
			</div>
		)
	);
}

export async function getServerSideProps({ req, res }: any) {
	const { user, error } = await supabase.auth.api.getUserByCookie(req);
	if (error) {
		logError(error.message);
		return { props: {}, redirect: { destination: '/auth/login', permanent: false } };
	}
	return { props: { auth_user: user } };
}
