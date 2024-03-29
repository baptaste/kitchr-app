import { AuthSession, AuthUser } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';
import { onAuthStateChange } from '../utils/supabase/auth/events.utils';
import { IAuthProps } from './auth';

export default function Auth({ children, setStoreAuthSession, setStoreAuthUser, setStoreAuthLoggedIn }: IAuthProps): JSX.Element {
	const [session, setSession] = useState<AuthSession | null>(null);
	const [user, setUser] = useState<AuthUser | null>(null);
	const [loggedIn, setLoggedIn] = useState<boolean>(false);

	function AuthCleanUp() {
		const authListener = onAuthStateChange({ setSession, setUser });
		authListener?.unsubscribe();
		setSession(null);
		setUser(null);
		setStoreAuthSession(null);
		setStoreAuthUser(null);
		setStoreAuthLoggedIn(false);
	}

	useEffect(() => {
		onAuthStateChange({ setSession, setUser });
		return () => {
			AuthCleanUp();
		};
	}, []);

	useEffect(() => {
		setStoreAuthSession(session);
		setStoreAuthUser(user);
		if (session) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
		setStoreAuthLoggedIn(loggedIn);
	}, [session, loggedIn]);

	return <>{children}</>;
}
