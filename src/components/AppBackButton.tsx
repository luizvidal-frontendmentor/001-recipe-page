"use client";

import { useRouter } from "next/navigation";

export default function AppBackButton() {
	const router = useRouter();

	return (
		<button
			onClick={() => router.back()}
			className="text-brown-800 hover:underline flex items-center gap-2 mb-4 cursor-pointer"
		>
			← Back to recipes
		</button>
	);
}
