import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BaseButton from '../../../components/ui/buttons/BaseButton';
import { fetchAPI } from '../../../lib/fetch';
import { logoutUser } from '../../../services/supabase/auth/logout.service';
import { logAny } from '../../../utils/logs.utils';
import { supabase } from '../../../utils/supabase/supabase.utils';

export default function Logout() {
	const router = useRouter();
	const [error, setError] = useState<string>('');

	async function handleLogoutClick() {
		const { error } = await logoutUser();
		if (error) {
			return setError("Une erreur est servenue, vous n'avez pas pu être déconnecté.");
		}
		router.push('/auth/login');
	}

	return (
		<>
			<BaseButton
				type='button'
				onClick={handleLogoutClick}
				text='Déconnexion'
				classes='m-bg-dark m-color-main m-standard-font-bold  m-margin-ver-1'
			/>
			{error && <p className='m-margin-ver-1 color-error text-bold'>{error}</p>}
		</>
	);
}
