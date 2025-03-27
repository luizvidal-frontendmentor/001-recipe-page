export default function AppRecipeIngredients({
	ingredients,
}: {
	ingredients: string[];
}) {
	return (
		<div className="flex flex-col gap-2">
			<h2>Ingredients</h2>
			<ul className="list-disc list-inside text-brown-800 flex flex-col gap-2">
				{ingredients.map((ingredient) => (
					<li key={ingredient}>
						<span className="text-stone-600">{ingredient}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
