import { El } from "../../../utils/el";
import { store } from "../../../utils/store";

export function Modal() {
	const backdrop = El({
		element: "div",
		className:
			"fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 hidden items-center justify-center p-4",
		restAttrs: {
			id: "modal-backdrop",
		},
		eventListener: [
			{
				event: "click",
				callback: (e) => {
					if (e.target === backdrop) {
						store.setState("isModalOpen", false);
					}
				},
			},
		],
	});

	const modalContent = El({
		element: "div",
		className:
			"bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative transform transition-all",
		children: [
			// دکمه بستن
			El({
				element: "button",
				innerText: "✕",
				className:
					"absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl font-light w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all",
				eventListener: [
					{
						event: "click",
						callback: () => {
							store.setState("isModalOpen", false);
						},
					},
				],
			}),

			// محتوای مودال
			El({
				element: "div",
				className: "p-8",
				children: [
					// آیکون
					El({
						element: "div",
						className: "flex justify-center mb-4",
						children: [
							El({
								element: "div",
								className:
									"w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center",
								children: [
									El({
										element: "span",
										innerText: "✨",
										className: "text-3xl",
									}),
								],
							}),
						],
					}),

					// عنوان
					El({
						element: "h2",
						innerText: "مودال",
						className: "text-3xl font-bold mb-3 text-center text-gray-800",
					}),

					// متن
					El({
						element: "p",
						innerText:
							"این یک مودال زیبا و مدرن است! می‌توانید محتوای خود را اینجا اضافه کنید.",
						className: "text-gray-600 mb-6 text-center leading-relaxed",
					}),

					// دکمه‌های action
					El({
						element: "div",
						className: "flex flex-col gap-3",
						children: [
							El({
								element: "button",
								innerText: "تأیید",
								className:
									"w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-semibold",
								eventListener: [
									{
										event: "click",
										callback: () => {
											alert("✅ عملیات با موفقیت انجام شد!");
											store.setState("isModalOpen", false);
										},
									},
								],
							}),
							El({
								element: "button",
								innerText: "انصراف",
								className:
									"w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold",
								eventListener: [
									{
										event: "click",
										callback: () => {
											store.setState("isModalOpen", false);
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

	backdrop.append(modalContent);

	store.subscribe("isModalOpen", (isOpen) => {
		if (isOpen) {
			backdrop.classList.remove("hidden");
			backdrop.classList.add("flex");
			// انیمیشن ورود
			setTimeout(() => {
				modalContent.style.transform = "scale(1)";
				modalContent.style.opacity = "1";
			}, 10);
		} else {
			modalContent.style.transform = "scale(0.9)";
			modalContent.style.opacity = "0";
			setTimeout(() => {
				backdrop.classList.add("hidden");
				backdrop.classList.remove("flex");
			}, 200);
		}
	});

	// تنظیمات اولیه برای انیمیشن
	modalContent.style.transform = "scale(0.9)";
	modalContent.style.opacity = "0";
	modalContent.style.transition =
		"transform 0.2s ease-out, opacity 0.2s ease-out";

	return backdrop;
}
