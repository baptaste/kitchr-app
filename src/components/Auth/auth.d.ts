export declare interface IAuthProps {
	children: React.ReactNode;
	setStoreAuthSession: (session: AuthSession) => void;
	setStoreAuthUser: (user: AuthUser) => void;
	setStoreAuthLoggedIn: (value: boolean) => void;
}
