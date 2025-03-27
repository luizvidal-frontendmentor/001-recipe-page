import { Recipe } from "@/app/api/recipes";
import Image from "next/image";

import AppRecipeIngredients from "./AppRecipeIngredients";
import AppRecipeInstructions from "./AppRecipeInstructions";
import AppRecipeNutrition from "./AppRecipeNutrition";
import AppRecipePreparationTime from "./AppRecipePreparationTime";

export default function AppRecipe({ recipe }: { recipe: Recipe }) {
	return (
		<div className="w-full max-w-184 bg-white p-0 sm:p-10 shadow-sm rounded-2xl flex flex-col gap-3 ">
			<div className="flex flex-col gap-5">
				<Image
					className="sm:rounded-2xl"
					src={recipe.image.src}
					alt={recipe.image.alt}
					width={recipe.image.width}
					height={recipe.image.height}
				/>
				<h1 className="px-5! sm:p-0">{recipe.name}</h1>
				<p className="px-5! sm:p-0">{recipe.description}</p>

				<div className="px-5 sm:p-0">
					<AppRecipePreparationTime
						preparationTimes={recipe.preparationTimes}
					/>
				</div>

				<div className="px-5 sm:p-0">
					<AppRecipeIngredients ingredients={recipe.ingredients} />
				</div>
			</div>

			<div className="px-5 sm:p-0">
				<hr className="my-3" />
				<AppRecipeInstructions instructions={recipe.instructions} />
			</div>

			<div className="px-5 pb-5 sm:p-0">
				<hr className="my-3" />
				<AppRecipeNutrition nutritions={recipe.nutritions} />
			</div>
		</div>
	);
}
