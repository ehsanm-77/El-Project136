import { El } from "../../utils/el";
import { router } from "../../utils/router";

export function Hero(a) {
	console.log(a);
	return El({
		element: "div",
		className: "relative overflow-hidden",
		children: [
			El({
				element: "div",
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
				children: [
					El({
						element: "div",
						className: "text-center",
						children: [
							El({
								element: "h1",
								innerText: "لیست کاروندان دوره 136 ریکت مکتب شریف",
								className:
									"text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent",
							}),
							El({
								element: "p",
								innerText: "کاروندان دوره را مشاهده و مدیریت کنید",
								className:
									"text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto",
							}),
							El({
								element: "button",
								innerText: "مشاهده لیست کاروندان →",
								className:
									"inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1",
								eventListener: [
									{
										event: "click",
										callback: () => {
											router.navigate("/products");
										},
									},
								],
							}),
						],
					}),
				],
			}),
		],
	});
}
