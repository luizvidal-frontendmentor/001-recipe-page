import { recipes } from "@/app/api/recipes";
import AppBackButton from "@/components/AppBackButton";
import AppFooter from "@/components/AppFooter";

import AppRecipe from "@/components/recipe/AppRecipe";
import { notFound } from "next/navigation";

export default async function RecipePage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const slug = (await params).slug;
	const recipe = recipes.find(
		(r) => r.name.toLowerCase().replace(/\s+/g, "-") === slug
	);

	if (!recipe) {
		notFound();
	}

	return (
		<div className="flex flex-col gap-3 justify-center items-center max-w-184 mx-auto px-4 ">
			<div className="w-full sm:mt-5">
				<AppBackButton />
				<AppRecipe recipe={recipe} />
			</div>
			<AppFooter />
		</div>
	);
}
