export interface IPatterns {
	email: RegExp;
	password: RegExp;
}

export const patterns: IPatterns = {
	email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/,
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\$;\$_\$-\^&\*])(?=.{8,})/,
};

/*
    Password RegEx Description
    ^	The password string will start this way
    (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
    (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
    (?=.*[0-9])	The string must contain at least 1 numeric character
    (?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
    (?=.{8,})	The string must be eight characters or longer
*/
