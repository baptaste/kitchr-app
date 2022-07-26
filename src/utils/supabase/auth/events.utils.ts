import { Subscription } from '@supabase/supabase-js';
import { logAny, logError } from '../../logs.utils';
import type { IOnAuthStateChangeProps } from './auth.d';
import { fetchAPI } from '../../../lib/fetch';
import { supabase } from '../client/supabase.utils';

export function onAuthStateChange({ setSession, setUser }: IOnAuthStateChangeProps): Subscription | null {
	const activeSession = supabase.auth.session();
	setSession(activeSession);
	setUser(activeSession?.user ?? null);
	const { data: authListener } = supabase.auth.onAuthStateChange((event, currentSession) => {
		logAny('onAuthStateChange event:', event);
		logAny('onAuthStateChange current currentSession:', currentSession);
		setSession(currentSession);
		setUser(currentSession?.user ?? null);
		fetchAPI('/auth', { method: 'POST', returnData: false }, { event, session: currentSession }).catch((error) => {
			logError(error);
		});
	});

	return authListener;
}
