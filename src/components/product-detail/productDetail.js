import { El } from "../../utils/el";
import { router } from "../../utils/router";

export function ProductDetail(params) {
	const productId = params?.id;
	console.log(params);
	const container = El({
		element: "div",
		className:
			"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-20",
	});

	// نمایش loading
	const loadingDiv = El({
		element: "div",
		className: "flex items-center justify-center min-h-screen",
		children: [
			El({
				element: "div",
				className: "text-center",
				children: [
					El({
						element: "div",
						className:
							"inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4",
					}),
					El({
						element: "p",
						innerText: "در حال بارگذاری...",
						className: "text-xl text-gray-600",
					}),
				],
			}),
		],
	});
	container.appendChild(loadingDiv);

	// دریافت اطلاعات محصول
	async function fetchProduct() {
		try {
			const API_URL = "https://6908e3c92d902d0651b20c81.mockapi.io/users";
			const res = await fetch(`${API_URL}/${productId}`);

			if (!res.ok) {
				throw new Error("محصول پیدا نشد");
			}

			const product = await res.json();

			// پاک کردن loading
			container.innerHTML = "";

			// ساخت صفحه جزئیات
			const productCard = El({
				element: "div",
				className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
				children: [
					// دکمه بازگشت
					El({
						element: "button",
						innerText: "← بازگشت به لیست کاروندان",
						className:
							"mb-6 px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all shadow-md hover:shadow-lg font-semibold border border-gray-200",
						eventListener: [
							{
								event: "click",
								callback: () => {
									router.navigate("/products");
								},
							},
						],
					}),

					// کارت اصلی محصول
					El({
						element: "div",
						className:
							"bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100",
						children: [
							// تصویر محصول
							El({
								element: "div",
								className:
									"h-64 md:h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center",
								children: [
									El({
										element: "div",
										innerText: "🛍️",
										className: "text-9xl opacity-80",
									}),
								],
							}),

							// محتوای محصول
							El({
								element: "div",
								className: "p-8 md:p-12",
								children: [
									// عنوان محصول
									El({
										element: "h1",
										innerText: product.name || "بدون نام",
										className:
											"text-4xl md:text-5xl font-extrabold mb-6 text-gray-800",
									}),

									// اطلاعات محصول
									El({
										element: "div",
										className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
										children: [
											El({
												element: "div",
												className:
													"bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100",
												children: [
													El({
														element: "div",
														innerText: "🎂",
														className: "text-3xl mb-2",
													}),
													El({
														element: "div",
														innerText: "سن",
														className: "text-sm text-gray-600 mb-1",
													}),
													El({
														element: "div",
														innerText: `${product.age || "N/A"} سال`,
														className: "text-3xl font-bold text-blue-600",
													}),
												],
											}),

											El({
												element: "div",
												className:
													"bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100",
												children: [
													El({
														element: "div",
														innerText: "🆔",
														className: "text-3xl mb-2",
													}),
													El({
														element: "div",
														innerText: "شناسه کاروند",
														className: "text-sm text-gray-600 mb-1",
													}),
													El({
														element: "div",
														innerText: product.id,
														className: "text-2xl font-bold text-blue-600",
													}),
												],
											}),
										],
									}),

									// دکمه‌های عملیات
									El({
										element: "div",
										className: "flex flex-col sm:flex-row gap-4",
										children: [
											El({
												element: "button",
												innerText: "✏️ ویرایش کاروند",
												className:
													"flex-1 px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl font-bold text-lg",
												eventListener: [
													{
														event: "click",
														callback: async () => {
															const newName = prompt("نام جدید:", product.name);
															const newAge = prompt("سن جدید:", product.age);
															if (newName && newAge) {
																try {
																	await fetch(`${API_URL}/${productId}`, {
																		method: "PUT",
																		headers: {
																			"Content-Type": "application/json",
																		},
																		body: JSON.stringify({
																			name: newName,
																			age: newAge,
																		}),
																	});
																	alert("✅ کاروند با موفقیت ویرایش شد!");
																	fetchProduct();
																} catch (error) {
																	alert("❌ خطا در ویرایش کاروند");
																}
															}
														},
													},
												],
											}),
											El({
												element: "button",
												innerText: "🗑️ حذف کاروند",
												className:
													"flex-1 px-6 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl font-bold text-lg",
												eventListener: [
													{
														event: "click",
														callback: async () => {
															if (
																confirm(
																	"⚠️ آیا مطمئن هستید که می‌خواهید این کاروند را حذف کنید؟"
																)
															) {
																try {
																	await fetch(`${API_URL}/${productId}`, {
																		method: "DELETE",
																	});
																	alert("✅ کاروند با موفقیت حذف شد!");
																	router.navigate("/products");
																} catch (error) {
																	alert("❌ خطا در حذف کاروند");
																}
															}
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
				],
			});

			container.appendChild(productCard);
		} catch (error) {
			container.innerHTML = "";
			const errorDiv = El({
				element: "div",
				className: "flex items-center justify-center min-h-screen",
				children: [
					El({
						element: "div",
						className: "text-center max-w-md mx-auto px-4",
						children: [
							El({
								element: "div",
								innerText: "❌",
								className: "text-6xl mb-4",
							}),
							El({
								element: "h2",
								innerText: "خطا در بارگذاری کاروند",
								className: "text-3xl font-bold mb-4 text-gray-800",
							}),
							El({
								element: "p",
								innerText: "متأسفانه کاروند مورد نظر یافت نشد.",
								className: "text-gray-600 mb-6",
							}),
							El({
								element: "button",
								innerText: "بازگشت به صفحه اصلی",
								className:
									"px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg font-semibold",
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
			});
			container.appendChild(errorDiv);
		}
	}

	if (productId) {
		fetchProduct();
	} else {
		container.innerHTML = "";
		const errorDiv = El({
			element: "div",
			className: "flex items-center justify-center min-h-screen",
			children: [
				El({
					element: "div",
					className: "text-center max-w-md mx-auto px-4",
					children: [
						El({
							element: "div",
							innerText: "⚠️",
							className: "text-6xl mb-4",
						}),
						El({
							element: "h2",
							innerText: "شناسه کاروند یافت نشد",
							className: "text-3xl font-bold mb-4 text-gray-800",
						}),
						El({
							element: "button",
							innerText: "بازگشت به صفحه اصلی",
							className:
								"px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg font-semibold",
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
		});
		container.appendChild(errorDiv);
	}

	return container;
}

