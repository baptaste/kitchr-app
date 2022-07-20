import type { NextApiRequest } from 'next';

export function getAccessTokenFromCookies(req: NextApiRequest): string | null {
	const { cookies } = req;
	const accessTokenKey: string = 'sb-access-token';
	let accessToken: string | null;

	const accessTokenCookieExists: boolean =
		accessTokenKey in cookies && typeof cookies[accessTokenKey] === 'string' && cookies[accessTokenKey] !== '';

	if (accessTokenCookieExists) {
		accessToken = req?.cookies[accessTokenKey];
	} else {
		accessToken = null;
	}

	return accessToken;
}
