import Divider from '../../Divider';
import BaseButton from '../../ui/buttons/BaseButton';
import { IAuthOptionsProps } from './AuthOptions';

export default function AuthOptions({ onClick, registering = false }: IAuthOptionsProps): JSX.Element {
	const authProviders = [
		{ id: 1, name: 'Google', iconSrc: '/static/icons/logo-google.png' },
		{ id: 2, name: 'Facebook', iconSrc: '/static/icons/logo-facebook.png' },
		{ id: 3, name: 'Apple', iconSrc: '/static/icons/logo-apple.png' },
	];

	return (
		<>
			<p className='m-standard-font margin-bottom-1'>
				Choisissez une des méthodes ci-dessous pour vous {registering ? 'inscrire!' : 'connecter!'}
			</p>

			<BaseButton
				type='button'
				onClick={() => onClick('email')}
				text={`${registering ? "S'inscrire" : 'Se connecter'} avec un email`}
				classes='bg-one color-three'
			/>

			<Divider text='ou' />

			{authProviders.map((provider: any) => (
				<BaseButton
					type='button'
					name={provider.name}
					key={provider.id}
					onClick={() => onClick('provider', provider.name)}
					text={`${registering ? "S'inscrire" : 'Se connecter'} avec ${provider.name}`}
					textClass='text-start '
					classes='flex justify-evenly bg-three color-two margin-ver-05 border-1px border-color-two'
					iconSrc={provider.iconSrc}
				/>
			))}

			<Divider text='ou' />

			<BaseButton
				type='button'
				onClick={() => onClick('magic-link')}
				text='Recevoir un lien magique'
				classes='bg-one color-three'
			/>
		</>
	);
}
