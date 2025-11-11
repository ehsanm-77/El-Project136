import { El } from "../../utils/el";
import Feature from "./feature";
import { Hero } from "./hero";

export function Home() {
	const a = 10;
	const container = El({
		element: "div",
		className:
			"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-20",
		children: [
			// Hero Section
			Hero(a),
			// Features Section
			Feature(a),
		],
	});

	return container;
}
