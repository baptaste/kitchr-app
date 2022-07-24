import { logAny, logError } from '../utils/logs.utils';

export async function fetchAPI(path: string, opts: any, data?: any): Promise<any> {
	logAny('fetch, path:', path, ' method:', opts.method, ' data:', data);

	const API_ENDPOINT = `http://localhost:3000/api`;
	const URL = `${API_ENDPOINT}${path}`;
	const options = {
		method: opts.method.toUpperCase(),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json;charset=UTF-8',
		},
		body: JSON.stringify(data),
	};
	try {
		const res = await fetch(URL, options);
		const resData = await res.json();
		logAny('fetch, resData:', resData);

		// if (!Boolean(opts.returnData)) return;

		return {
			data: resData,
			status: res.status,
		};
	} catch (error: any) {
		logError(error?.message);
		return error?.message;
	}
}
