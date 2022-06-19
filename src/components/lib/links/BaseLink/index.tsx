import Link from 'next/link';
import styles from './index.module.scss';

interface IBaseLinkProps {
	href: string;
	external?: boolean;
	text: string;
	classes: string;
}

export default function BaseLink({ href, external, text, classes }: IBaseLinkProps): JSX.Element {
	if (external)
		return (
			<a href={href} target='_blank' className={`${styles['base-link']} ${classes} m-standard-font m-text-center`}>
				{text}
			</a>
		);

	return (
		<Link href={href} scroll>
			<a className={`${styles['base-link']} ${classes} m-standard-font m-text-center`}>{text}</a>
		</Link>
	);
}
