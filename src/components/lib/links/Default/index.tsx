import Link from 'next/link';
import styles from './index.module.scss';

export default function LinkDefault({ href, text }: any) {
	return (
		<Link href={href} scroll>
			<a className={`${styles.container} bg-main color-light standardFont`}>{text}</a>
		</Link>
	);
}
