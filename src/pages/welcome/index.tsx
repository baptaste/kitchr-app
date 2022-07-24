import { useRouter } from 'next/router';
import PageHead from '../../components/PageHead';

export default function Welcome(): JSX.Element {
	const router = useRouter();
	const { query } = router;

	return (
		<>
			<PageHead title='Welcome' />
			<p>Bienvenue ! Nous t'avons envoyé un mail à l'adresse "{query.user_email}" afin de valider ton inscription.</p>
		</>
	);
}
