import { El } from "../../utils/el";

export default function Feature(a) {
	console.log(a);
	return El({
		element: "div",
		className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
		children: [
			El({
				element: "div",
				className: "grid grid-cols-1 md:grid-cols-3 gap-8",
				children: [
					El({
						element: "div",
						className:
							"bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100",
						children: [
							El({
								element: "div",
								innerText: "🛍️",
								className: "text-5xl mb-4",
							}),
							El({
								element: "h3",
								innerText: "کاروندان دوره",
								className: "text-2xl font-bold mb-3 text-gray-800",
							}),
							El({
								element: "p",
								innerText: "لیست کامل کاروندان دوره 136 ریکت مکتب شریف",
								className: "text-gray-600 leading-relaxed",
							}),
						],
					}),
					El({
						element: "div",
						className:
							"bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100",
						children: [
							El({
								element: "div",
								innerText: "⚡",
								className: "text-5xl mb-4",
							}),
							El({
								element: "h3",
								innerText: "مدیریت آسان",
								className: "text-2xl font-bold mb-3 text-gray-800",
							}),
							El({
								element: "p",
								innerText: "افزودن، ویرایش و حذف کاروندان به راحتی",
								className: "text-gray-600 leading-relaxed",
							}),
						],
					}),
					El({
						element: "div",
						className:
							"bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100",
						children: [
							El({
								element: "div",
								innerText: "🔍",
								className: "text-5xl mb-4",
							}),
							El({
								element: "h3",
								innerText: "جزئیات کامل",
								className: "text-2xl font-bold mb-3 text-gray-800",
							}),
							El({
								element: "p",
								innerText: "مشاهده جزئیات کامل هر کاروند",
								className: "text-gray-600 leading-relaxed",
							}),
						],
					}),
				],
			}),
		],
	});
}
