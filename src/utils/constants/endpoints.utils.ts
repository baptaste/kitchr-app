export const KITCHR_CLIENT_ENTRYPOINT: string = 'http://localhost:3000';
export const KITCHR_API_ENTRYPOINT: string = 'http://localhost:3000/api';

export const EDAMAM_API = {
	entrypoint: 'https://api.edamam.com/search?q=',
	credentials: `&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEYS}`,
	filter: '&health=vegetarian',
};

export const WELCOME_PAGE_ENDPOINT = `${KITCHR_CLIENT_ENTRYPOINT}/welcome?user_email=`;
