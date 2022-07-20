export declare interface IBaseLinkProps {
	id?: string;
	href: string;
	text: string;
	width?: string | number;
	height?: string | number;
	classes?: string;
	localeClass?: string;
	activeClass?: string;
	external?: boolean;
	children?: React.ReactNode;
	isActive?: (current: any, href: string) => boolean;
	onClick?: ((e: MouseEventHandler<Element>) => void) | undefined;
	onMouseEnter?: (e: React.MouseEvent) => void;
	onMouseLeave?: (e: React.MouseEvent) => void;
	onFocus?: () => void;
	onBlur?: () => void;
}
