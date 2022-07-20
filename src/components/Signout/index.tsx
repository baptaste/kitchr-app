import { useRouter } from 'next/router';
import { logError } from '../../utils/logs.utils';
import { authSignOut } from '../../utils/supabase/auth/signOut.utils';
import BaseButton from '../ui/buttons/BaseButton';

export default function Signout() {
	const router = useRouter();

	async function handleSignout() {
		//TODO show popup confirmation before
		const { error } = await authSignOut();
		if (error) {
			return logError(error.message);
		}
		router.push('/auth/login');
	}

	return <BaseButton onClick={handleSignout} text='Déconnexion' classes='m-bg-dark m-color-light' />;
}
