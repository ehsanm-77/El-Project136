import { El } from "../../utils/el";
import { router } from "../../utils/router";

export function MyName(params) {
	const name = params?.name;
	const route = router.getCurrentParams();
	console.log(route);
	console.log(params);
	const container = El({
		element: "div",
		className:
			"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-20",
		children: [
			El({
				element: "h1",
				innerText: `سلام ${name}`,
				className:
					"text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent",
			}),
		],
	});
	return container;
}
