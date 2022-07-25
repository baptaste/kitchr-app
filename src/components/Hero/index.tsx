import { getEdmamRecipes } from '../../services/edamam/get-recipes.service';
import { brand } from '../../utils/constants/document.utils';
import { logAny } from '../../utils/logs.utils';
import BaseButton from '../ui/buttons/BaseButton';
// import { useAuth } from '../Auth';
import BaseLink from '../ui/links/BaseLink';
import styles from './index.module.scss';

export default function Hero(): JSX.Element {
	// const { session, user, loggedIn } = useAuth();
	// logAny('Hero, user:', user);
	// logAny('Hero, loggedIn ?', loggedIn);
	//TODO connect Hero to redux
	return (
		<section className={`${styles['hero']} flex-column justify-between`}>
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
				classes='bg-one color-three'
			/> */}
			<div className={`${styles['hero__title']}`}>
				<h1 className='title-font'>{brand.name},</h1>
				<h1 className='title-font'>{brand.hero.title}</h1>
			</div>
			<h2 className={`${styles['hero__description']} m-standard-font`}>{brand.hero.description}</h2>
			{/* <BaseLink href='/inventory' text='Trouver ma recette' classes='bg-one color-three' /> */}
			<BaseButton type='button' text='Trouver ma recette TEST' onClick={getEdmamRecipes} classes='bg-one color-three' />
		</section>
	);
}
