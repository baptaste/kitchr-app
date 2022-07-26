import { fetchAPI } from '../../../../lib/fetch';

export async function adminDeleteAccount(userId: string) {
	return await fetchAPI('/auth/admin/delete', { method: 'POST' }, { userId });
}
