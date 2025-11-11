import { El } from "../../utils/el";
import { router } from "../../utils/router";

export function Home() {
	const container = El({
		element: "div",
		className:
			"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-20",
		children: [
			// Hero Section
			El({
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
			}),

			// Features Section
			El({
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
			}),
		],
	});

	return container;
}

