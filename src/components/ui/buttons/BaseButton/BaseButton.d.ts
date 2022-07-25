export declare interface IBaseButtonProps {
	id?: string;
	type: 'button' | 'reset' | 'submit';
	name?: string;
	text: string;
	textClass?: string;
	width?: string | number;
	height?: string | number;
	classes?: string;
	localeClass?: string;
	activeClass?: string;
	children?: React.ReactNode;
	disabled?: boolean;
	iconSrc?: string;
	onClick?: ((e: MouseEventHandler<Element>) => void) | undefined;
	onSubmit?: ((e: MouseEventHandler<Element>) => void) | undefined;
	onMouseEnter?: (e: React.MouseEvent) => void;
	onMouseLeave?: (e: React.MouseEvent) => void;
	onFocus?: () => void;
	onBlur?: () => void;
}
