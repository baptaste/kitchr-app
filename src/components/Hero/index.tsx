import { brand } from '../../utils/constants.utils';
import BaseLink from '../lib/links/Default';
import styles from './index.module.scss';

export default function Hero(): JSX.Element {
	return (
		<section className={`${styles.hero} flex-column justify-between`}>
			<div className={`${styles.title}`}>
				<h1 className='titleFont'>{brand.name},</h1>
				<h1 className='titleFont'>{brand.hero.title}</h1>
			</div>
			<h2 className={`${styles.description} standardFont`}>{brand.hero.description}</h2>

			<BaseLink href='/login' text='Trouver ma recette' classes='bg-main color-light' />
		</section>
	);
}
