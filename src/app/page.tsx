import AppFooter from "@/components/AppFooter";
import AppRecipe from "@/components/recipe/AppRecipe";
import { recipes } from "./api/recipes";

export default function Home() {
	const recipe = recipes[0];
	return (
		<div className="flex flex-col gap-3 justify-center items-center">
			<div className="sm:mt-5">
				<AppRecipe recipe={recipe} />
			</div>
			<AppFooter />
		</div>
	);
}
