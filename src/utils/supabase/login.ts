import { supabase } from './supabase';
import { Provider } from '@supabase/supabase-js';
import { logError } from '../logs.utils';
import { KITCHR_CLIENT_ENTRYPOINT } from '../constants/endpoints.utils';

export async function loginWithEmail(email: string, password: string) {
	try {
		const { error } = await supabase.auth.signIn({ email, password }, { redirectTo: KITCHR_CLIENT_ENTRYPOINT });
		if (error) throw `Error while loging in with email. Message: ${error.message}`;
		return error;
	} catch (error) {
		logError(error);
	}
}

export async function loginWithProvider(provider: Provider) {
	try {
		const { error } = await supabase.auth.signIn({ provider });
		if (error) throw `Error while loging in with ${provider}. Message: ${error.message}`;
		return error;
	} catch (error) {
		logError(error);
	}
}

export async function loginWithMagicLink(email: string) {
	try {
		const { error } = await supabase.auth.signIn({ email }, { redirectTo: KITCHR_CLIENT_ENTRYPOINT });
		if (error) throw `Error while loging in with magic link. Message: ${error.message}`;
		return error;
	} catch (error) {
		logError(error);
	}
}
