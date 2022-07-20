import { NextApiRequest, NextApiResponse } from 'next';
import { logAny } from '../../../utils/logs.utils';
import { supabase } from '../../../utils/supabase/supabase.utils';
import { getAccessTokenFromCookies } from '../../../utils/token.utils';

export default function handleAuth(req: NextApiRequest, res: NextApiResponse) {
	// Set the auth cookies.
	supabase.auth.api.setAuthCookie(req, res);
	return res.status(200).json({});
}
