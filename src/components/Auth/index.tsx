import { AuthSession, AuthUser } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';
import { logAny } from '../../utils/logs.utils';
import { onAuthStateChange } from '../../utils/supabase/auth/events.utils';
import { IAuthProps } from './auth';

// let authSession: AuthSession | null = null;
// let authUser: AuthUser | null = null;
// let loggedIn: boolean = false;

// function setAuth(session: AuthSession | null, user: AuthUser | null, loggedIn: boolean) {
// 	logAny('setAuth, loggedIn ?', loggedIn);
// 	authSession = session;
// 	authUser = user;
// 	loggedIn = loggedIn;
// }

// function getAuth(): { session: AuthSession | null; user: AuthUser | null; loggedIn: boolean } {
// 	logAny('getAuth, loggedIn ?', loggedIn);
// 	if (authSession || authUser) {
// 		return { session: authSession, user: authUser, loggedIn };
// 	}
// 	return { session: null, user: null, loggedIn };
// }

export default function Auth({ children, setStoreAuthSession, setStoreAuthUser, setStoreAuthLoggedIn }: IAuthProps): JSX.Element {
	const [session, setSession] = useState<AuthSession | null>(null);
	const [user, setUser] = useState<AuthUser | null>(null);

	useEffect(() => {
		const authListener = onAuthStateChange({ setSession, setUser });
		return () => {
			authListener?.unsubscribe();
		};
	}, []);

	useEffect(() => {
		logAny('Auth user:', user);
		logAny('Auth session:', session);
		if (session && user) {
			setStoreAuthSession(session);
			setStoreAuthUser(user);
			setStoreAuthLoggedIn(true);
		}
	}, [user, session]);

	return <>{children}</>;
}

// export function useAuth(): { session: AuthSession | null; user: AuthUser | null; loggedIn: boolean } {
// 	const { session, user, loggedIn } = getAuth();
// 	logAny('useAuth, loggedIn ?', loggedIn);
// 	return { session, user, loggedIn };
// }
