import type { NextPage } from 'next';
import Hero from '../components/Hero';
import { logAny } from '../utils/logs.utils';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../store/containers/Home';
import { renderIf } from '../utils/jsx.utils';

const Home: NextPage = ({ isLoading }: any) => {
	return (
		<>
			{/* {renderIf(!isLoading, () => (
				<p>not loading</p>
			))} */}
			<Hero />
			<div className='test'>
				{/* {user ? (
					<p>
						Welcome {user.name}!
						<BaseLink href='/api/auth/logout' text='Déconnexion' classes='m-bg-main m-color-light' />
					</p>
				) : (
					<BaseLink href='/api/auth/login' text='Connexion' classes='m-bg-main m-color-light' />
				)} */}
			</div>
			<div className='test'>
				{/* <p>Vos recettes:</p>
				{recipes?.length > 0 ? (
					recipes.map((recipe: any) => (
						<div key={recipe.id}>
							<p>{recipe.id}</p>
							<p>{recipe.title}</p>
							<p>{recipe.description}</p>
						</div>
					))
				) : (
					<p>Vous n'avez pas encore de recettes!</p>
				)} */}
			</div>
			<div className='test'>TEST DIV</div>
		</>
	);
};

// export const getServerSideProps = withPageAuthRequired({
// 	async getServerSideProps() {
// 		const supabase = getSupabase();
// 		const { data: recipes } = await supabase.from('recipe').select('*');

// 		return {
// 			props: { recipes },
// 		};
// 	},
// });

// export const getServerSideProps = withPageAuthRequired({
// 	async getServerSideProps({ req, res }: any) {
// 		const {
// 			user: { accessToken },
// 		}: any = getSession(req, res);

// 		const supabase = getSupabase(accessToken);

// 		const { data: recipes } = await supabase.from('recipe').select('*');
// 		// .eq('user_id', accessToken.sub);
// 		// .filter('user_id', 'eq', accessToken.sub);

// 		return {
// 			props: { recipes },
// 		};
// 	},
// });

// export const getServerSideProps = async () => {
// 	const supabase = getSupabase();

// 	const { data: recipes } = await supabase.from('recipe').select('*');

// 	return {
// 		props: { recipes },
// 	};
// };

// export const getServerSideProps = withPageAuthRequired();

/*
 - withPageAuthRequired func:
	checks if we have a user signed in and handles redirecting them to the Login page if not.
	If we have a user, it automatically passes the user object to our Index component as a prop.
	Since this is happening on the server before our component is rendered,
	we no longer need to handle loading, error states, or whether or not the user is logged in.
*/

export default connect(mapStateToProps, mapDispatchToProps)(Home);
