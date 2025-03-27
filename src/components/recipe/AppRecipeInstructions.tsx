import { Item } from "@/app/api/recipes";

export default function AppRecipeInstructions({
	instructions: instructions,
}: {
	instructions: Item[];
}) {
	return (
		<div className="flex flex-col gap-2">
			<h2>Instructions</h2>
			<ul className="list-decimal list-inside text-brown-800  flex flex-col gap-2">
				{instructions.map((instruction) => (
					<li key={instruction.name} className="font-bold">
						<span className="font-bold ml-2! text-stone-600">
							{instruction.name}:{" "}
						</span>
						<span className="text-stone-600 font-normal">
							{instruction.value}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
