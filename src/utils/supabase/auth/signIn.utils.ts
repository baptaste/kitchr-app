import { supabase } from '../supabase.utils';
import { ApiError, AuthSession, AuthUser, Provider } from '@supabase/supabase-js';
import { logAny, logError } from '../../logs.utils';
import { KITCHR_CLIENT_ENTRYPOINT } from '../../constants/endpoints.utils';
import { IAuthSignIn } from './auth';

export async function signInWithEmailPassword(email: string, password: string): Promise<void | IAuthSignIn> {
	logAny('signInWithEmailPassword, email:', email, 'password:', password);
	try {
		const { user, session, error } = await supabase.auth.signIn(
			{ email, password },
			{ redirectTo: `${KITCHR_CLIENT_ENTRYPOINT}/user/profile` }
		);
		logAny('signInWithEmailPassword, user:', user, 'session:', session, 'error:', error);
		if (error) throw `Error while loging in with email. Message: ${error.message}`;
		return { user, session, error };
	} catch (error) {
		logError(error);
	}
}

export async function signInWithProvider(provider: Provider): Promise<void | IAuthSignIn> {
	try {
		const { user, session, error } = await supabase.auth.signIn({ provider });
		if (error) throw `Error while loging in with ${provider}. Message: ${error.message}`;
		return { user, session, error };
	} catch (error) {
		logError(error);
	}
}

export async function signInWithMagicLink(email: string): Promise<void | IAuthSignIn> {
	try {
		const { user, session, error } = await supabase.auth.signIn(
			{ email },
			{ redirectTo: `${KITCHR_CLIENT_ENTRYPOINT}/user/profile` }
		);
		if (error) throw `Error while loging in with magic link. Message: ${error.message}`;
		return { user, session, error };
	} catch (error) {
		logError(error);
	}
}
