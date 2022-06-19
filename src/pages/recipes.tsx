import Image from 'next/image';
import { HitsType } from '../interfaces/edamam';
import { getRecipes } from '../services/getRecipes.service';
import { logAny } from '../utils/logs.utils';
import { NextPage } from 'next';

/* NOTE: this Page Component 'ImagesPage' is an example */

export const getServerSideProps = async () => {
	// getStaticProps & getServerSideProps are Next built-in functions (only available in next Pages, => /pages folder).
	// They are used for SEO and fast pages load
	// it pre-render datas before the client renders and serve an HTML page with fetched datas.

	// - getStaticProps, static generations fetching (recommended, called once at build time, faster load thant SSR)
	// other alernative
	// - getServerSideProps, SSR fetching  (called at each requests, slower than static fetch)

	const recipes: HitsType | null | undefined = await getRecipes();
	return { props: { recipes } };
};

const RecipesPage: NextPage = ({ recipes }: any) => {
	// in order to display remote url images on nextjs, we have to specify the host source in nex.config.js > images > domains
	// const recipes = data?.hits?.map((recipe: any) => recipe);
	logAny('fetched recipes:', recipes);

	return (
		<div>
			<p>Recipes to put here:</p>
			{/* {recipes.map((recipe) => (
        <div key={recipe.id}>{recipe.name}</div>

        // <div key={id}>
        //   <Image src={download_url} alt={`${author} photo`} width={450} height={250} objectFit='cover' />
        //   <p>{author}</p>
        // </div>
      ))} */}
		</div>
	);
};

export default RecipesPage;
