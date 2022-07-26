import { NextApiRequest, NextApiResponse } from 'next';
import { logAny, logError } from '../../utils/logs.utils';

export default async function handleGetEdamamRecipes(req: NextApiRequest, res: NextApiResponse) {
	logAny('api/ handleGetEdamamRecipes, requestUrl:', req.body.requestUrl);
	try {
		const response: any = await fetch(req.body.requestUrl, { method: 'GET' });
		const recipes = await response.json();
		res.status(200).json(recipes);
	} catch (error: unknown) {
		logError(error);
		res.status(401).json({ error });
	}
}
