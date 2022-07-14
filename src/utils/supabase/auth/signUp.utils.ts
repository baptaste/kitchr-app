import { supabase } from '../supabase.utils';
import { AuthSession, AuthUser, ApiError, Provider } from '@supabase/supabase-js';
import { logAny, logError } from '../../logs.utils';
import { KITCHR_CLIENT_ENTRYPOINT } from '../../constants/endpoints.utils';
import { IAuthSignUp } from './auth';

export async function signUpWithEmailPassword(email: string, password: string): Promise<void | IAuthSignUp> {
	try {
		const { user, session, error } = await supabase.auth.signUp(
			{ email, password },
			{ redirectTo: `${KITCHR_CLIENT_ENTRYPOINT}/user/profile` }
		);
		if (error) throw `Error while loging in with email. Message: ${error.message}`;
		return { user, session, error };
	} catch (error) {
		logError(error);
	}
}

export async function signUpWithProvider(provider: Provider): Promise<void | IAuthSignUp> {
	try {
		const { user, session, error } = await supabase.auth.signUp({ provider });
		if (error) throw `Error while loging in with ${provider}. Message: ${error.message}`;
		return { user, session, error };
	} catch (error) {
		logError(error);
	}
}

export async function signUpWithMagicLink(email: string): Promise<void | IAuthSignUp> {
	try {
		const { user, session, error } = await supabase.auth.signUp(
			{ email },
			{ redirectTo: `${KITCHR_CLIENT_ENTRYPOINT}/user/profile` }
		);
		if (error) throw `Error while loging in with magic link. Message: ${error.message}`;
		return { user, session, error };
	} catch (error) {
		logError(error);
	}
}
