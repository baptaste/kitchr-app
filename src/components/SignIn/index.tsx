import Divider from '../Divider';
import BaseButton from '../lib/buttons/Default';
import BaseInput from '../lib/inputs/Default';
import BaseLink from '../lib/links/Default';
import PageHead from '../PageHead';
import styles from './index.module.scss';

export default function SignIn(): JSX.Element {
	return (
		<div className={`${styles.signIn}`}>
			<PageHead title='Connexion' />
			<p className='standardFont margin-bottom-1'>Entrez votre email et mot de passe pour vous connecter!</p>
			<BaseInput inputName='email' labelText='Email*' placeholder='email@exemple.com' />
			<BaseInput inputName='password' labelText='Mot de passe*' placeholder='Min. 8 charactères' />
			<Divider text='ou' />
			<BaseButton text='Se connecter avec Google' classes='bg-dark color-light' />
		</div>
	);
}
