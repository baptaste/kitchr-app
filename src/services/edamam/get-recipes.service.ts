import { fetchAPI } from '../../lib/fetch';
import { logAny, logError } from '../../utils/logs.utils';
import type { IEdamamAPIResponse } from './edamam';

const EDAMAM_API = {
	entrypoint: 'https://api.edamam.com/search?q=',
	credentials: `&app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_APP_KEYS}`,
	filter: '&health=vegetarian',
};

function getRequestUrl(args: string[]): string {
	const { entrypoint, credentials, filter } = EDAMAM_API;

	if (!args) return entrypoint + credentials + filter;

	const linkedArgs = args.map((str) => str.concat('', '%20'));
	const urlFormattedQuery = linkedArgs.toString().replace(/,/g, '');

	logAny('urlFormattedQuery:', urlFormattedQuery);

	return entrypoint + urlFormattedQuery + credentials + filter;
}

export async function getEdmamRecipes(): Promise<IEdamamAPIResponse | any> {
	try {
		const query = ['tomato', 'basil', 'feta'];
		const requestUrl = getRequestUrl(query);
		// const response: IEdamamAPIResponse | any = await fetch(requestUrl, { method: 'GET' });
		const res: IEdamamAPIResponse | any = await fetchAPI('/recipes', { method: 'POST' }, { requestUrl });
		// const data = await response.json();
		if (res.status !== 200) {
			throw `Error while fetching data from edamam recipe api. Res: ${res}`;
		}
		const recipes = res?.data?.hits.map((key: any) => key.recipe);
		logAny('edamam recipes:', recipes);
		return recipes;
	} catch (error) {
		logError(error);
		throw error;
	}
}
