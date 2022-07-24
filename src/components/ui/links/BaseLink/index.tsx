import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import type { IBaseLinkProps } from './BaseLink';
import styles from './index.module.scss';

export default function BaseLink(props: IBaseLinkProps): JSX.Element {
	const { pathname } = useRouter();
	const active: boolean = useMemo(() => props.href === pathname, [pathname]);
	let className: string = `${styles['base-link']}
	${props.localeClass && styles[props.localeClass]} text-centered radius-075rem ${props.classes ?? ''} `;
	let style: any = {};

	if (active) {
		if (props.activeClass) {
			className += `${styles[props.activeClass]}`;
		}
	}

	if (props.width || props.height) {
		style = { width: props.width, height: props.height };
	}

	if (props.external) {
		return (
			<a
				id={props.id}
				href={props.href}
				target='_blank'
				style={style}
				className={className}
				onClick={props.onClick}
				onMouseEnter={props.onMouseEnter}
				onMouseLeave={props.onMouseLeave}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
			>
				{props.text}
				{props.children}
			</a>
		);
	}

	return (
		<Link href={props.href} scroll>
			<a
				id={props.id}
				style={style}
				className={className}
				onClick={props.onClick}
				onMouseEnter={props.onMouseEnter}
				onMouseLeave={props.onMouseLeave}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
			>
				{props.text}
				{props.children}
			</a>
		</Link>
	);
}
