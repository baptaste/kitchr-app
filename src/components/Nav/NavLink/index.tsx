import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

export default function NavLink({ path, pathRegex, src, text }: any) {
	return (
		<Link href={path} scroll>
			<a className={`${styles.container} flex-column justify-evenly`}>
				<Image src={src} alt={`${text} icône`} width={24} height={24} objectFit="cover" />
				<p className="tinyFont text-bold">{text}</p>
			</a>
		</Link>
	);
}
