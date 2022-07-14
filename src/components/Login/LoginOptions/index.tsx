import { useRouter } from 'next/router';
import { signInWithProvider } from '../../../utils/supabase/auth/signIn.utils';
import Divider from '../../Divider';
import BaseButton from '../../lib/buttons/BaseButton';

interface ILoginOptionsProps {
	handleLoginOption: (method: string, opts?: any) => void;
	isRegistering?: boolean;
}

export default function LoginOptions({ handleLoginOption, isRegistering }: ILoginOptionsProps): JSX.Element {
	const authProviders = [
		{ id: 1, name: 'Google', icon: '', classes: 'm-bg-dark m-color-light' },
		{ id: 2, name: 'Facebook', icon: '', classes: 'm-bg-dark m-color-light' },
		{ id: 3, name: 'Apple', icon: '', classes: 'm-bg-dark m-color-light' },
	];

	return (
		<>
			<p className='m-standard-font m-margin-bottom-1'>
				Choisissez une des méthodes ci-dessous pour vous {isRegistering ? 'inscrire!' : 'connecter!'}
			</p>

			<BaseButton
				onClick={() => handleLoginOption('email')}
				text={`${isRegistering ? "S'inscrire" : 'Se connecter'} avec un email`}
				classes='m-bg-main m-color-light'
			/>

			<Divider text='ou' />

			{authProviders.map((provider: any) => (
				<BaseButton
					key={provider.id}
					onClick={() => handleLoginOption('provider', { provider: provider.name })}
					text={`${isRegistering ? "S'inscrire" : 'Se connecter'} avec ${provider.name}`}
					classes={provider.classes}
				/>
			))}

			<Divider text='ou' />

			<BaseButton
				onClick={() => handleLoginOption('magic-link')}
				text='Recevoir un lien magique'
				classes='m-bg-main m-color-light'
			/>
		</>
	);
}