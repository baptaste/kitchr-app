import { brand } from '../../utils/constants.utils';
import LinkDefault from '../lib/links/Default';
import styles from './index.module.scss';

export default function Hero() {
	return (
		<section className={`${styles.container} flex-column justify-between`}>
			<div className={`${styles.title}`}>
				<h1 className="titleFont">{brand.name},</h1>
				<h1 className="titleFont">{brand.hero.title}</h1>
			</div>
			<h2 className="standardFont">{brand.hero.description}</h2>

			<LinkDefault href="/login" text="Trouver ma recette" />
		</section>
	);
}
