import AuthForm from '../../../components/AuthForm';
import Divider from '../../../components/Divider';
import PageHead from '../../../components/PageHead';
import BaseLink from '../../../components/ui/links/BaseLink';
import styles from './index.module.scss';

export default function Login(): JSX.Element {
	return (
		<div className={`${styles['login']}`}>
			<PageHead title='Connexion' />
			<AuthForm />
			<Divider />
			<div className={`${styles['login__redirect']}`}>
				<p className={`m-standard-font`}>Pas encore de compte ?</p>
				<BaseLink href='/auth/register' text='Créér un compte' classes='color-one m-standard-font-bold' />
			</div>
		</div>
	);
}
