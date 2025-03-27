export type Item = {
	name: string;
	value: string;
};

export type RecipeImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export type Recipe = {
	name: string;
	image: RecipeImage;
	description: string;
	preparationTimes: Item[];
	ingredients: string[];
	instructions: Item[];
	nutritions: Item[];
};

export const recipes: Recipe[] = [
	{
		name: "Simple Omelette Recipe",
		image: {
			src: "/images/omelette.jpeg",
			alt: "Simple Omelette Recipe",
			width: 1312,
			height: 600,
		},
		description:
			"An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
		preparationTimes: [
			{ name: "Total", value: "Approximately 10 minutes" },
			{ name: "Preparation", value: "5 minutes" },
			{ name: "Cooking", value: "5 minutes" },
		],
		ingredients: [
			"2-3 large eggs",
			"Salt, to taste",
			"Pepper, to taste",
			"1 tablespoon of butter or oil",
			"Optional fillings: cheese, diced vegetables, cooked meats, herbs",
		],
		instructions: [
			{
				name: "Beat the eggs",
				value:
					"In a bowl, beat the eggs with a pinch of salt and pepper until well mixed.",
			},
			{
				name: "Heat the pan",
				value:
					"Place a non-stick frying pan over medium heat and add butter or oil.",
			},
			{
				name: "Cook the omelette",
				value:
					"Once the butter is melted, pour in the eggs and cook until set.",
			},
			{
				name: "Add fillings (optional)",
				value: "Sprinkle your chosen fillings over one half of the omelette.",
			},
			{
				name: "Fold and serve",
				value:
					"Fold the omelette and let it cook for another minute before serving.",
			},
			{
				name: "Enjoy",
				value: "Serve hot with additional seasoning if needed.",
			},
		],
		nutritions: [
			{ name: "Calories", value: "277kcal" },
			{ name: "Carbs", value: "0g" },
			{ name: "Protein", value: "20g" },
			{ name: "Fat", value: "22g" },
		],
	},
	{
		name: "Classic Pancakes",
		image: {
			src: "/images/pancakes.jpg",
			alt: "Classic Pancakes",
			width: 1500,
			height: 1000,
		},
		description:
			"Fluffy, golden pancakes perfect for breakfast or brunch, served with syrup, butter, and fresh fruit.",
		preparationTimes: [
			{ name: "Total", value: "Approximately 20 minutes" },
			{ name: "Preparation", value: "10 minutes" },
			{ name: "Cooking", value: "10 minutes" },
		],
		ingredients: [
			"1 cup all-purpose flour",
			"2 tablespoons sugar",
			"1 teaspoon baking powder",
			"1/2 teaspoon salt",
			"3/4 cup milk",
			"1 egg",
			"2 tablespoons melted butter",
			"1 teaspoon vanilla extract",
		],
		instructions: [
			{
				name: "Mix dry ingredients",
				value:
					"In a bowl, whisk together flour, sugar, baking powder, and salt.",
			},
			{
				name: "Combine wet ingredients",
				value:
					"In another bowl, mix milk, egg, melted butter, and vanilla extract.",
			},
			{
				name: "Make batter",
				value:
					"Gradually mix the wet ingredients into the dry ingredients until smooth.",
			},
			{
				name: "Cook pancakes",
				value:
					"Pour batter onto a heated griddle, cook until bubbles form, then flip and cook until golden brown.",
			},
			{ name: "Serve", value: "Top with syrup, butter, and fruit if desired." },
		],
		nutritions: [
			{ name: "Calories", value: "210kcal" },
			{ name: "Carbs", value: "30g" },
			{ name: "Protein", value: "5g" },
			{ name: "Fat", value: "8g" },
		],
	},
	{
		name: "Spaghetti Carbonara",
		image: {
			src: "/images/carbonara.jpg",
			alt: "Spaghetti Carbonara",
			width: 2400,
			height: 1350,
		},
		description:
			"A rich and creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
		preparationTimes: [
			{ name: "Total", value: "Approximately 25 minutes" },
			{ name: "Preparation", value: "10 minutes" },
			{ name: "Cooking", value: "15 minutes" },
		],
		ingredients: [
			"200g spaghetti",
			"100g pancetta, diced",
			"2 large eggs",
			"50g Parmesan cheese, grated",
			"Salt and black pepper, to taste",
			"1 tablespoon olive oil",
		],
		instructions: [
			{
				name: "Cook spaghetti",
				value: "Boil water, add salt, and cook spaghetti until al dente.",
			},
			{
				name: "Prepare pancetta",
				value: "Heat olive oil in a pan and cook pancetta until crispy.",
			},
			{
				name: "Mix eggs and cheese",
				value: "In a bowl, whisk together eggs and grated Parmesan cheese.",
			},
			{
				name: "Combine ingredients",
				value:
					"Drain spaghetti and mix it with pancetta, then remove from heat.",
			},
			{
				name: "Add egg mixture",
				value:
					"Stir in egg and cheese mixture, letting the residual heat cook the sauce.",
			},
			{
				name: "Serve",
				value: "Season with black pepper and serve immediately.",
			},
		],
		nutritions: [
			{ name: "Calories", value: "450kcal" },
			{ name: "Carbs", value: "50g" },
			{ name: "Protein", value: "20g" },
			{ name: "Fat", value: "18g" },
		],
	},
];
