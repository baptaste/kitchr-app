export interface IProcessenv {
	EDAMAM_APP_ID: string;
	EDAMAM_APP_KEYS: string;
	AUTH0_SECRET: string;
	AUTH0_BASE_URL: string;
	AUTH0_ISSUER_BASE_URL: string;
	AUTH0_CLIENT_ID: string;
	AUTH0_CLIENT_SECRET: string;
	NEXT_PUBLIC_SUPABASE_URL: string;
	NEXT_PUBLIC_SUPABASE_KEY: string;
	SUPABASE_SIGNING_SECRET: string;
}

declare global {
	namespace NodeJS {
		export interface ProcessEnv extends IProcessenv {
			NODE_ENV: 'developement' | 'production';
		}
	}
}
