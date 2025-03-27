import { Item } from "@/app/api/recipes";

export default function AppRecipePreparationTime({
	preparationTimes,
}: {
	preparationTimes: Item[];
}) {
	return (
		<div className="bg-rose-50 text-rose-800 p-6 rounded-2xl flex flex-col gap-3">
			<span className="font-bold text-xl ">Preparation time</span>
			<ul className="list-disc list-inside flex flex-col gap-2">
				{preparationTimes.map((preparationTime) => (
					<li key={preparationTime.name}>
						<span className="font-bold ml-2! text-stone-600">
							{preparationTime.name}:{" "}
						</span>
						<span className="text-stone-600">{preparationTime.value}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
