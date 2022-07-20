import { brand } from '../../utils/constants/document.utils';
import { logAny } from '../../utils/logs.utils';
// import { useAuth } from '../Auth';
import BaseLink from '../ui/links/BaseLink';
import styles from './index.module.scss';

export default function Hero(): JSX.Element {
	// const { session, user, loggedIn } = useAuth();
	// logAny('Hero, user:', user);
	// logAny('Hero, loggedIn ?', loggedIn);
	//TODO connect Hero to redux
	return (
		<section className={`${styles['hero']} m-flex-column m-justify-between`}>
			{/* {loggedIn ? (
				<div className={`${styles['hero__title']}`}>
					<h1 className='title-font'>Bonjour {user?.email},</h1>
					<h1 className='title-font'>Qu'est-ce qu'on prépare aujourd'hui ?</h1>
				</div>
			) : (
				<>
					<div className={`${styles['hero__title']}`}>
						<h1 className='title-font'>{brand.name},</h1>
						<h1 className='title-font'>{brand.hero.title}</h1>
					</div>
					<h2 className={`${styles['hero__description']} m-standard-font`}>{brand.hero.description}</h2>
				</>
			)}
			<BaseLink
				href={loggedIn ? '/inventory' : '/auth/login'}
				text='Trouver ma recette'
				classes='m-bg-main m-color-light'
			/> */}
			<div className={`${styles['hero__title']}`}>
				<h1 className='title-font'>{brand.name},</h1>
				<h1 className='title-font'>{brand.hero.title}</h1>
			</div>
			<h2 className={`${styles['hero__description']} m-standard-font`}>{brand.hero.description}</h2>
			<BaseLink href='/inventory' text='Trouver ma recette' classes='m-bg-main m-color-light' />
		</section>
	);
}
