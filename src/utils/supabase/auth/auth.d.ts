import { AuthUser, Provider } from '@supabase/supabase-js';

export declare interface IAuthUser {
	auth_user: AuthUser;
}

export declare interface IOnAuthStateChangeProps {
	setSession: React.Dispatch<React.SetStateAction<AuthSession | null>>;
	setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

export declare interface IAuthSignUp {
	user: User | null;
	session: Session | null;
	error: ApiError | null;
}

export declare interface IAuthSignIn {
	session: Session | null;
	user: User | null;
	provider?: Provider;
	url?: string | null;
	error: ApiError | null;
}

export declare interface IAuthSignOut {
	error: ApiError | null;
}
