import Link from 'next/link';
import styles from './index.module.scss';

export default function BaseLink({ href, external, text, classes }: any): JSX.Element {
	if (external)
		return (
			<a href={href} target='_blank' className={`${styles.container} ${classes} standardFont text-center`}>
				{text}
			</a>
		);

	return (
		<Link href={href} scroll>
			<a className={`${styles.container} ${classes} standardFont text-center`}>{text}</a>
		</Link>
	);
}
