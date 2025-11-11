import { El } from "../../../utils/el";
import { store } from "../../../utils/store";

export function Footer() {
	const sharedValueDisplay = El({
		element: "div",
		innerText: "مقدار مشترک: ",
		className: "text-sm text-black opacity-90",
		restAttrs: {
			id: "shared-value-display",
		},
	});

	const counterDisplay = El({
		element: "div",
		innerText: "شمارنده: 0",
		className:
			"text-sm font-semibold px-3 py-1.5 bg-white bg-opacity-20 text-black rounded-full backdrop-blur-sm",
		restAttrs: {
			id: "counter-display",
		},
	});

	const productsCountDisplay = El({
		element: "div",
		innerText: "تعداد کاروندان: 0",
		className:
			"text-sm font-semibold px-3 py-1.5 bg-white bg-opacity-20 text-black rounded-full backdrop-blur-sm",
		restAttrs: {
			id: "products-count-display",
		},
	});

	const userNameDisplay = El({
		element: "div",
		innerText: "کاربر: ",
		className: "text-sm text-black opacity-90",
		restAttrs: {
			id: "user-name-display",
		},
	});

	const footer = El({
		element: "footer",
		className:
			"bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white mt-auto border-t border-blue-500",
		children: [
			El({
				element: "div",
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
				children: [
					El({
						element: "div",
						className:
							"flex flex-col md:flex-row justify-between items-center gap-4",
						children: [
							// اطلاعات سمت راست
							El({
								element: "div",
								className:
									"flex flex-col md:flex-row items-center gap-4 text-sm",
								children: [
									El({
										element: "div",
										innerText:
											"© 2024 دوره 136 ریکت مکتب شریف. تمامی حقوق محفوظ است.",
										className: "text-white opacity-90",
									}),
								],
							}),

							// State Display
							El({
								element: "div",
								className: "flex flex-wrap items-center gap-3 justify-center",
								children: [
									userNameDisplay,
									sharedValueDisplay,
									counterDisplay,
									productsCountDisplay,
								],
							}),
						],
					}),
				],
			}),
		],
	});

	store.subscribe("userName", (value) => {
		if (value) {
			userNameDisplay.innerText = `کاربر: ${value}`;
			userNameDisplay.className =
				"text-sm font-semibold px-3 py-1.5 bg-white bg-opacity-20 text-black rounded-full backdrop-blur-sm";
		} else {
			userNameDisplay.innerText = "کاربر: ";
			userNameDisplay.className = "text-sm text-black opacity-90";
		}
	});

	store.subscribe("sharedValue", (value) => {
		if (value) {
			sharedValueDisplay.innerText = `مقدار مشترک: ${value}`;
			sharedValueDisplay.className =
				"text-sm font-semibold px-3 py-1.5 bg-white bg-opacity-20 text-black rounded-full backdrop-blur-sm";
		} else {
			sharedValueDisplay.innerText = "مقدار مشترک: ";
			sharedValueDisplay.className = "text-sm text-black opacity-90";
		}
	});

	store.subscribe("counter", (value) => {
		const counterValue = value !== undefined ? value : 0;
		counterDisplay.innerText = `شمارنده: ${counterValue}`;
		counterDisplay.className =
			"text-sm font-semibold px-3 py-1.5 bg-white bg-opacity-20 text-black rounded-full backdrop-blur-sm";
	});

	const initialCounter = store.getState("counter");
	if (initialCounter !== undefined) {
		counterDisplay.innerText = `شمارنده: ${initialCounter}`;
	}

	store.subscribe("productsCount", (count) => {
		const productsCount = count !== undefined ? count : 0;
		productsCountDisplay.innerText = `تعداد کاروندان: ${productsCount}`;
	});

	const initialProductsCount = store.getState("productsCount");
	if (initialProductsCount !== undefined) {
		productsCountDisplay.innerText = `تعداد کاروندان: ${initialProductsCount}`;
	}

	return footer;
}
