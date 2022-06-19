import axios from 'axios';
import { HitsType } from '../interfaces/edamam';
import { KITCHR_API_ENTRYPOINT } from '../utils/constants/endpoints.utils';
import { logError, logAny } from '../utils/logs.utils';

// TEST
export async function getRecipes(): Promise<HitsType | undefined> {
	const query = ['basil', 'tomato', 'lemon'];
	try {
		const response = await axios.post(`${KITCHR_API_ENTRYPOINT}/search`, query);
		if (!response || response == null) throw 'Error while fetching data';
		const hits: HitsType = await response.data;
		logAny('********* hits:', hits);
		return hits;
	} catch (error) {
		logError(error);
	}
}
