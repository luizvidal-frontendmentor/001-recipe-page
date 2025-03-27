import AppFooter from "@/components/AppFooter";
import AppRecipeCard from "@/components/recipe/AppRecipeCard";
import { recipes } from "./api/recipes";

export default function Home() {
	return (
		<div className="flex flex-col gap-8 justify-center items-center py-8">
			<h1 className="text-3xl text-center">Our Recipes</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl ">
				{recipes.map((recipe) => (
					<AppRecipeCard key={recipe.name} recipe={recipe} />
				))}
			</div>
			<AppFooter />
		</div>
	);
}
