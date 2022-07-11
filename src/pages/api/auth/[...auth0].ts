import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import JWT from 'jsonwebtoken';

/*
The [...auth0].js is a catch all route.
This means that any url that starts with /api/auth0 will load this component
— /api/auth0, /api/auth0/login, /api/auth0/some/deeply/nested/url etc.
*/

const afterCallback = async (req: any, res: any, session: any) => {
	const payload = {
		userId: session.user.sub, // The sub field represents Auth0's unique ID for this user
		exp: Math.floor(Date.now() / 1000) + 60 * 60, // we are setting an expiry for our token — 1 hour.
	};
	// we are signing a new token with that payload with the supabase signing secret
	session.user.accessToken = JWT.sign(payload, process.env.SUPABASE_SIGNING_SECRET);
	return session;
};

export default handleAuth({
	async callback(req: any, res: any) {
		try {
			await handleCallback(req, res, { afterCallback });
		} catch (error: any) {
			res.status(error.status || 500).end(error.message);
		}
	},
});
