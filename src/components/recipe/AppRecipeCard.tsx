import { Recipe } from "@/app/api/recipes";
import Image from "next/image";
import Link from "next/link";

export default function AppRecipeCard({ recipe }: { recipe: Recipe }) {
	return (
		<Link
			href={`/recipe/${recipe.name.toLowerCase().replace(/\s+/g, "-")}`}
			className="w-full max-w-80 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
		>
			<div className="flex flex-col gap-3">
				<Image
					className="rounded-t-2xl w-full h-48 object-cover"
					src={recipe.image.src}
					alt={recipe.image.alt}
					width={320}
					height={192}
				/>
				<div className="p-4">
					<h2 className="text-xl mb-2">{recipe.name}</h2>
					<p className="text-stone-600 line-clamp-2">{recipe.description}</p>
					<div className="mt-4 text-brown-800">
						<span className="text-sm">{recipe.preparationTimes[0].value}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
