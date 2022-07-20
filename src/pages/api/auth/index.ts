import { NextApiRequest, NextApiResponse } from 'next';
import { logAny } from '../../../utils/logs.utils';
import { supabase } from '../../../utils/supabase/supabase.utils';
import { getAccessTokenFromCookies } from '../../../utils/token.utils';

export default function handleAuth(req: NextApiRequest, res: NextApiResponse) {
	const { event, session } = req.body;
	const accessToken = getAccessTokenFromCookies(req);

	if (!event) {
		throw new Error('Auth event missing!');
	}

	try {
		if (event === 'SIGNED_IN') {
			if (!session) {
				throw new Error('Auth session missing!');
			}
			if (!accessToken) {
				// Set the auth cookies.
				supabase.auth.api.setAuthCookie(req, res);
			} else {
				logAny('handleAuth, accessToken already set in cookies:', accessToken);
			}
		}

		if (event === 'SIGNED_OUT') {
			if (accessToken) {
				supabase.auth.api.setAuthCookie(req, res);
			}
		}

		return res.status(200).json({});
	} catch (error) {
		return res.status(405).json({ error });
	}

	// return res.status(200).json({});
}
