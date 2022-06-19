import { brand } from '../../utils/constants/document.utils';
import BaseLink from '../lib/links/BaseLink';
import styles from './index.module.scss';

export default function Hero(): JSX.Element {
	return (
		<section className={`${styles['hero']} m-flex-column m-justify-between`}>
			<div className={`${styles['hero__title']}`}>
				<h1 className='m-title-font'>{brand.name},</h1>
				<h1 className='m-title-font'>{brand.hero.title}</h1>
			</div>
			<h2 className={`${styles['hero__description']} m-standard-font`}>{brand.hero.description}</h2>
			<BaseLink href='/auth/login' text='Trouver ma recette' classes='m-bg-main m-color-light' />
		</section>
	);
}
