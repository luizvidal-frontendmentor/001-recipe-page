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
			src: "/001-recipe-page-main/images/omelette.jpeg",
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
			src: "/001-recipe-page-main/images/pancakes.jpg",
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
			src: "/001-recipe-page-main/images/carbonara.jpg",
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
	{
		name: "Chicken Tikka Masala",
		image: {
			src: "/001-recipe-page-main/images/tikka-masala.png",
			alt: "Chicken Tikka Masala",
			width: 1500,
			height: 1125,
		},
		description:
			"A rich and creamy curry made with tender chicken pieces in a spiced tomato-based sauce. This British-Indian dish is packed with flavor and perfect served with naan bread and rice.",
		preparationTimes: [
			{ name: "Total", value: "45 minutes" },
			{ name: "Preparation", value: "15 minutes" },
			{ name: "Cooking", value: "30 minutes" },
		],
		ingredients: [
			"800g chicken breast, cut into chunks",
			"2 cups plain yogurt",
			"2 tbsp garam masala",
			"2 tbsp tandoori masala",
			"1 can (400g) crushed tomatoes",
			"2 cups heavy cream",
			"1 large onion, finely chopped",
			"4 cloves garlic, minced",
			"2-inch piece ginger, grated",
			"2 tbsp vegetable oil",
			"Salt and pepper to taste",
			"Fresh cilantro for garnish",
		],
		instructions: [
			{
				name: "Marinate chicken",
				value:
					"Mix chicken with yogurt and spices, let marinate for at least 30 minutes.",
			},
			{
				name: "Prepare sauce",
				value:
					"Sauté onions, garlic, and ginger until golden. Add tomatoes and cream.",
			},
			{
				name: "Cook chicken",
				value: "Grill or pan-fry marinated chicken until cooked through.",
			},
			{
				name: "Combine",
				value: "Add chicken to the sauce and simmer for 10 minutes.",
			},
			{
				name: "Serve",
				value: "Garnish with cilantro and serve with naan bread and rice.",
			},
		],
		nutritions: [
			{ name: "Calories", value: "520kcal" },
			{ name: "Carbs", value: "12g" },
			{ name: "Protein", value: "32g" },
			{ name: "Fat", value: "38g" },
		],
	},
	{
		name: "Quinoa Buddha Bowl",
		image: {
			src: "/001-recipe-page-main/images/buddha-bowl.png",
			alt: "Quinoa Buddha Bowl",
			width: 2550,
			height: 2511,
		},
		description:
			"A nutritious and colorful bowl packed with quinoa, roasted vegetables, avocado, and a tahini dressing. Perfect for a healthy lunch or dinner.",
		preparationTimes: [
			{ name: "Total", value: "35 minutes" },
			{ name: "Preparation", value: "15 minutes" },
			{ name: "Cooking", value: "20 minutes" },
		],
		ingredients: [
			"1 cup quinoa",
			"2 sweet potatoes, cubed",
			"2 cups chickpeas, drained",
			"2 cups kale, chopped",
			"1 avocado, sliced",
			"1 cup cherry tomatoes",
			"1/4 cup tahini",
			"1 lemon, juiced",
			"2 tbsp olive oil",
			"Salt and pepper to taste",
			"Optional: sesame seeds",
		],
		instructions: [
			{
				name: "Cook quinoa",
				value: "Rinse quinoa and cook according to package instructions.",
			},
			{
				name: "Roast vegetables",
				value:
					"Toss sweet potatoes and chickpeas with oil, roast at 200°C for 20 minutes.",
			},
			{
				name: "Prepare dressing",
				value: "Mix tahini with lemon juice, water, salt, and pepper.",
			},
			{
				name: "Assemble bowl",
				value: "Layer quinoa, roasted vegetables, kale, avocado, and tomatoes.",
			},
			{
				name: "Finish",
				value: "Drizzle with tahini dressing and sprinkle with sesame seeds.",
			},
		],
		nutritions: [
			{ name: "Calories", value: "480kcal" },
			{ name: "Carbs", value: "65g" },
			{ name: "Protein", value: "15g" },
			{ name: "Fat", value: "22g" },
		],
	},
	{
		name: "Chocolate Lava Cake",
		image: {
			src: "/001-recipe-page-main/images/lava-cake.png",
			alt: "Chocolate Lava Cake",
			width: 1200,
			height: 1200,
		},
		description:
			"Decadent individual chocolate cakes with a gooey molten center. Perfect for chocolate lovers and special occasions.",
		preparationTimes: [
			{ name: "Total", value: "25 minutes" },
			{ name: "Preparation", value: "10 minutes" },
			{ name: "Cooking", value: "15 minutes" },
		],
		ingredients: [
			"200g dark chocolate",
			"120g unsalted butter",
			"4 eggs",
			"120g sugar",
			"2 tbsp flour",
			"1 tsp vanilla extract",
			"Pinch of salt",
			"Butter and cocoa powder for ramekins",
		],
		instructions: [
			{
				name: "Prepare ramekins",
				value: "Butter and dust four ramekins with cocoa powder.",
			},
			{
				name: "Melt chocolate",
				value: "Melt chocolate and butter together in a double boiler.",
			},
			{
				name: "Mix batter",
				value:
					"Whisk eggs, sugar, and vanilla. Fold in chocolate mixture and flour.",
			},
			{
				name: "Bake",
				value: "Pour into ramekins and bake at 200°C for 12-14 minutes.",
			},
			{
				name: "Serve",
				value:
					"Let rest for 1 minute, invert onto plates, and serve immediately.",
			},
		],
		nutritions: [
			{ name: "Calories", value: "420kcal" },
			{ name: "Carbs", value: "35g" },
			{ name: "Protein", value: "6g" },
			{ name: "Fat", value: "28g" },
		],
	},
];
