import AuthForm from '../../../components/AuthForm';
import Divider from '../../../components/Divider';
import PageHead from '../../../components/PageHead';
import BaseLink from '../../../components/ui/links/BaseLink';
import styles from './index.module.scss';

export default function Register(): JSX.Element {
	return (
		<div className={`${styles['register']}`}>
			<PageHead title='Inscription' />
			<AuthForm registering />
			<Divider />
			<div className={`${styles['register__redirect']} flex-column`}>
				<p className={`m-standard-font`}>Déjà inscrit ?</p>
				<BaseLink href='/auth/login' text='Se connecter' classes='color-one m-standard-font-bold' />
			</div>
		</div>
	);
}
