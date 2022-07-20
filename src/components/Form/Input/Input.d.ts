import { ChangeEventHandler } from 'react';

export declare interface IInputProps {
	type: String<InputType>;
	name: string;
	labelText?: string;
	value?: string;
	defaultValue?: string;
	id?: string;
	children?: React.ReactNode;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	width?: string | number;
	onClick?: ((e: MouseEventHandler<Element>) => void) | undefined;
	onChange?: ((e: ChangeEventHandler<Element>) => void) | undefined;
}

type InputType =
	| 'button'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'radio'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week';
