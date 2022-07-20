import { MouseEvent } from 'react';
import type { IBaseButtonProps } from './BaseButton';
import styles from './index.module.scss';

export default function BaseButton(props: IBaseButtonProps): JSX.Element {
	let className: string = `${styles['base-button']}
	${props.localeClass && styles[props.localeClass]} m-button-reset m-standard-font m-text-center ${props.classes ?? ''} `;
	let style: any = {};

	if (props.width || props.height) {
		style = { width: props.width, height: props.height };
	}

	return (
		<button
			type={props.type ? props.type : 'button'}
			style={style}
			className={className}
			onClick={props.onClick}
			onSubmit={props.onSubmit}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
			disabled={props.disabled}
		>
			{props.text}
			{props.children}
		</button>
	);
}
