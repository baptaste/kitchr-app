import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BaseButton from '../../../components/ui/buttons/BaseButton';
import { fetchAPI } from '../../../lib/fetch';
import { adminDeleteAccount } from '../../../services/supabase/admin/auth/delete.service';
import { deleteAccount } from '../../../services/supabase/client/auth/delete.service';
import { logoutUser } from '../../../services/supabase/client/auth/logout.service';
import { logAny, logError } from '../../../utils/logs.utils';
import { supabase } from '../../../utils/supabase/client/supabase.utils';

export default function SignOut() {
	const router = useRouter();
	const [error, setError] = useState<string>('');

	async function handleSignoutClick() {
		const userId = supabase.auth.user()?.id;
		if (!userId) return logError('Delete account error, no user found.');
		const { data, error } = await deleteAccount(userId); // browser context
		// const { data, error } = await adminDeleteAccount(userId); // test, move it to pages/admin
		if (error) {
			return setError("Une erreur est servenue, nous n'avons pas pu supprimer votre compte.");
		}
		logAny('Delete account success, data:', data);
		router.push('/auth/login');
	}

	return (
		<>
			<BaseButton
				type='button'
				onClick={handleSignoutClick}
				text='Supprimer mon compte'
				classes='bg-none color-five border-1px m-standard-font-bold margin-ver-1'
			/>
			{error && <p className='margin-ver-1 color-five text-bold'>{error}</p>}
		</>
	);
}
