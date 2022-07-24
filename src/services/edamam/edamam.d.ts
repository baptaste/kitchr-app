export interface IEdamamAPIResponse {
	count: number;
	from: number;
	hits: IEdamamRecipes;
	more: boolean;
	q: string;
	to: number;
}

export interface IEdamamRecipes {
	recipes: IEdamamRecipe[];
	[Symbol.iterator](): IterableIterator<IEdamamRecipe>;
}

export interface IEdamamRecipe {
	title: string;
	image: string;
	ingredients: IEdamamIngredient[];
	// ingredientMatches: string[];
	// matchesCount: number;
	instructions: string[];
}

export interface IEdamamIngredient {
	text: string | any;
	quantity: number | any;
	measure: string | any;
	food: string | any;
	weight: number | any;
	foodCategory: string | any;
	foodId: string | any;
	image: string | any;
	totalTime?: number | any;
	cuisineType?: string | any;
	mealType?: string | any;
	dishType?: string | any;
}
