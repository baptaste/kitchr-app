import { NextApiRequest, NextApiResponse } from 'next';
import { fetchAPI } from '../../../../lib/fetch';
import { logAny, logError } from '../../../../utils/logs.utils';
import { supabaseAdmin } from '../../../../utils/supabase/admin/supabase.utils';

export default async function handleAdminDeleteAccount(req: NextApiRequest, res: NextApiResponse) {
	logAny('api/ handleAdminDeleteAccount, serId:', req.body.userId);
	const { userId } = req.body;
	try {
		const { data, user, error } = await supabaseAdmin.auth.api.deleteUser(userId);
		//TODO update store and remove cookies by calling onAuthStateChange server-side aswell
		if (error) {
			throw new Error(error.message);
		}
		res.status(200).json({ data, user });
	} catch (error: unknown) {
		logError(error);
		res.status(401).json({ error });
	}
}
