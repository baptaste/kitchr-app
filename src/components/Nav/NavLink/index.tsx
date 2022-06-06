import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.scss';

export default function NavLink({ href, exact, regex, src, text }: any) {
	const { pathname } = useRouter(),
		isActive = exact ? pathname === href : pathname.startsWith(href),
		withImage = src ? src !== '' && src.includes('/static/icons/') : false;

	let imgClasses = 'flex-column justify-evenly',
		textClasses = 'tinyFont text-bold';

	if (isActive) {
		if (withImage) {
			imgClasses += ' filter-color-main';
		} else {
			textClasses += ' color-main';
		}
	}

	return (
		<Link href={href} scroll>
			<a className={`${styles.link} flex-column justify-evenly`}>
				{withImage && (
					<div className={imgClasses}>
						<Image src={src} alt={`${text} icône`} width={24} height={24} objectFit='cover' />
					</div>
				)}
				<p className={textClasses}>{text}</p>
			</a>
		</Link>
	);
}
