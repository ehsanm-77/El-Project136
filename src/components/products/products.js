import { El } from "../../utils/el";
import { Products as ProductsList } from "../products/product";

export function Products() {
	const container = El({
		element: "div",
		className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-20",
		children: [
			El({
				element: "div",
				className: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl",
				children: [
					El({
						element: "div",
						className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
						children: [
							El({
								element: "h1",
								innerText: "لیست کاروندان",
								className: "text-4xl md:text-5xl font-extrabold mb-3",
							}),
							El({
								element: "p",
								innerText: "مدیریت و مشاهده تمام کاروندان دوره 136",
								className: "text-xl opacity-90",
							}),
						],
					}),
				],
			}),
			ProductsList(),
		],
	});

	return container;
}

