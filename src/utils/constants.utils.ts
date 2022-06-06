export const API_URL: string = 'http://localhost:3000';

export const document = {
	title: {
		prefix: 'kitchr | ',
		homeSuffix: 'Recettes zéro gaspi, 100% végé',
	},
	links: [{ rel: 'icon', href: '/favicon.png' }],
	metadata: {
		charset: 'UTF-8',
		compatibility: {
			httpEquiv: 'X-UA-Compatible',
			content: 'IE=edge',
		},
		metas: [
			{
				name: 'viewport',
				content: 'width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
			},
			{
				name: 'theme-color',
				content: '#333333',
			},
			{
				name: 'description',
				content: "kitchr, l'appli zéro gaspi de recettes fonds de placard. Trouves ta recette avec uniquement les ingrédients que as en stock !",
			},
			{
				name: 'keywords',
				content: 'recettes, cuisine, zéro gaspi, fonds de placard, végétarien, verte',
			},
			{
				name: 'title',
				content: 'kitchr | Recettes zéro gaspi, 100% végé',
			},
			{
				name: 'subtitle',
				content: 'Trouves ta recette 100% fonds de placard, 100% végé.',
			},
			{
				name: 'robots',
				content: 'index, follow',
			},
		],
	},
};

export const brand = {
	name: 'kitchr',
	hero: {
		title: "l'appli des recettes fonds de placard",
		description: 'Trouves ta recette avec uniquement les ingrédients que as en stock ! Zéro gaspi, 100% végé.',
	},
};
