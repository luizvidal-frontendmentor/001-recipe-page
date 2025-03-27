import { Item } from "@/app/api/recipes";

export default function AppRecipeNutrition({
	nutritions,
}: {
	nutritions: Item[];
}) {
	return (
		<div className="flex flex-col gap-2">
			<h2>Nutrition</h2>
			<p>
				The table below shows nutritional values per serving without the
				additional fillings.
			</p>

			<div className="flex flex-col gap-2 mt-2">
				{nutritions.map((nutrition, index) => (
					<div key={nutrition.name}>
						<div className="flex gap-2">
							<span className="w-full">{nutrition.name}:</span>
							<span className="w-full font-bold text-brown-800">
								{nutrition.value}
							</span>
						</div>
						{index !== nutritions.length - 1 && <hr className="my-2" />}
					</div>
				))}
			</div>
		</div>
	);
}
