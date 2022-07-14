import { supabase } from '../supabase.utils';
import { Subscription } from '@supabase/supabase-js';
import { logAny, logError } from '../../logs.utils';
import type { IOnAuthStateChangeProps } from './auth.d';

export function onAuthStateChange({ setSession, setUser }: IOnAuthStateChangeProps): Subscription | null {
	const activeSession = supabase.auth.session();
	setSession(activeSession);
	setUser(activeSession?.user ?? null);

	const { data: authListener } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
		logAny('Auth onAuthStateChange event:', event, 'current session:', currentSession);
		setSession(currentSession);
		setUser(currentSession?.user ?? null);
		fetch('/api/auth', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			credentials: 'same-origin',
			body: JSON.stringify({ event, session: currentSession }),
		})
			.then((res) => res.json())
			.catch((error) => logError(error));
	});

	return authListener;
}
