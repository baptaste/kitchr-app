import { useRouter } from 'next/router';
import PageHead from '../../components/PageHead';

export default function Welcome(): JSX.Element {
	const router = useRouter();
	const { query } = router;

	return (
		<>
			<PageHead title='Welcome' />
			<h2 className='m-standard-font-bold color-two'>
				Bienvenue ! Nous t'avons envoyé un mail à l'adresse
				<span className='m-standard-font-bold color-one'> {query.user_email} </span>
				afin de {query.reset_pw ? 'reinitialiser ton mot de passe' : 'valider ton inscription.'}
			</h2>
		</>
	);
}
