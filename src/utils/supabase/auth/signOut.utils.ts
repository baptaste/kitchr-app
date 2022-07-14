import { supabase } from '../supabase.utils';
import { ApiError } from '@supabase/supabase-js';
import { logError } from '../../logs.utils';
import { IAuthSignOut } from './auth';

export async function authSignOut(): Promise<IAuthSignOut> {
	let nullError;
	try {
		const { error } = await supabase.auth.signOut();
		if (error) return { error };
		nullError = null;
	} catch (error) {
		logError(error);
	}
	return { error: nullError };
}
