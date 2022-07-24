export interface IAuthState {
	email: string;
	password: string;
	userName: string;
	emailError: boolean;
	passwordError: boolean;
	emailErrorMessage: string;
	passwordErrorMessage: string;
	submitted: boolean;
}
