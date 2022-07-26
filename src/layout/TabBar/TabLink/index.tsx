import Image from 'next/image';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { logAny } from '../../../utils/logs.utils';
import BaseIcon from '../../../components/ui/icons/BaseIcon';
import styles from './index.module.scss';

interface ITabLinkProps {
	href: string;
	exact?: boolean;
	pattern?: RegExp;
	src: string;
	text: string;
}

export default function TabLink({ href, exact, pattern, src, text }: ITabLinkProps): JSX.Element {
	const { pathname }: NextRouter = useRouter();
	let isActive: boolean | null | undefined | RegExpMatchArray = false,
		iconClasses: string = 'flex-column justify-evenly';

	/* changing link text if current page is /register by checking pathname and pattern */
	if (pattern) {
		if (pathname === '/auth/register' && pathname.match(pattern)) {
			text = 'Inscription';
		}
	}

	/* defining if link is either active or not by checking pathname and pattern */
	if (exact) {
		isActive = pathname === href || (pattern && pathname.match(pattern));
	} else {
		isActive = pathname.startsWith(href);
	}

	/* setting additional classes if link is active */
	if (isActive) iconClasses += ' active-link filter-color-one';

	return (
		<Link href={href} scroll>
			<a className={`${styles['nav-link']} text-center`}>
				<div className={`${styles['nav-link__icon']} ${iconClasses}`}>
					<BaseIcon src={src} alt={text} />
				</div>
				<p className={`${styles['nav-link__text']} text-center m-tiny-font`}>{text}</p>
			</a>
		</Link>
	);
}
