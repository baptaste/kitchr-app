interface validateInputArgs {
	pattern: RegExp;
	value: string;
}

export function validateInput({ pattern, value }: validateInputArgs) {
	// let verifiedInput = {
	// 	isValid: true,
	// 	invalidInput: '',
	// 	stateErrorKey: '',
	// 	errorMessage: '',
	// };
	let isValid = true;

	if (!pattern.test(value)) {
		isValid = false;
		// verifiedInput.invalidInput = inputName;
		// verifiedInput.stateErrorKey = 'emailError';
		// verifiedInput.errorMessage = "L'email n'est pas valide";
	}

	// if (!passwordPattern.test(state.password)) {
	//     verifiedInput.isValid = false;
	//     verifiedInput.invalidInput = state.password;
	//     verifiedInput.stateErrorKey = 'passwordError'
	//     verifiedInput.errorMessage = 'L\'email n\'est pas valide'
	// }

	return isValid;
}
