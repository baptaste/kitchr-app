import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import styles from './index.module.scss';

export default function LinkDefault({ href, exact, children, ...props }: any) {
	// <a className={`${styles.container} bg-main color-light standardFont`}>{text}</a>
	const { pathname } = useRouter();
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	if (isActive) {
		props.className += ' active';
	}

	return (
		<Link href={href} scroll>
			<a {...props}>{children}</a>
		</Link>
	);
}
