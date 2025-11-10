import { El } from "../../utils/el";
import { store } from "../../utils/store";

export function Footer() {
	const sharedValueDisplay = El({
		element: "div",
		innerText: "مقدار مشترک: ",
		className: "text-sm mt-2",
		restAttrs: {
			id: "shared-value-display",
		},
	});

	const counterDisplay = El({
		element: "div",
		innerText: "شمارنده: 0",
		className:
			"text-lg font-bold mt-2 bg-white text-blue-600 px-4 py-2 rounded inline-block",
		restAttrs: {
			id: "counter-display",
		},
	});

	const productsCountDisplay = El({
		element: "div",
		innerText: "تعداد محصولات: 0",
		className:
			"text-sm mt-2 bg-yellow-200 text-yellow-800 px-3 py-1 rounded inline-block",
		restAttrs: {
			id: "products-count-display",
		},
	});

	const userNameDisplay = El({
		element: "div",
		innerText: "اسم : ",
		className: "text-sm mt-2",
		restAttrs: {
			id: "shared-value-display",
		},
	});
	const footer = El({
		element: "div",
		className:
			"bg-blue-400 fixed bottom-0 w-full p-4 text-center font-bold text-white",
		children: [
			El({
				element: "div",
				innerText: "footer element",
			}),
			sharedValueDisplay,
			counterDisplay,
			productsCountDisplay,
			userNameDisplay,
		],
	});

	store.subscribe("userName", (value) => {
		if (value) {
			userNameDisplay.innerText = `اسم: ${value}`;
		} else {
			userNameDisplay.innerText = "اسم:";
		}
	});

	store.subscribe("sharedValue", (value) => {
		if (value) {
			sharedValueDisplay.innerText = `مقدار مشترک: ${value}`;
		} else {
			sharedValueDisplay.innerText = "مقدار مشترک:";
		}
	});

	store.subscribe("counter", (value) => {
		const counterValue = value !== undefined ? value : 0;
		counterDisplay.innerText = `شمارنده: ${counterValue}`;
		if (counterValue > 0) {
			counterDisplay.className =
				"text-lg font-bold mt-2 bg-green-200 text-green-800 px-4 py-2 rounded inline-block";
		} else if (counterValue < 0) {
			counterDisplay.className =
				"text-lg font-bold mt-2 bg-red-200 text-red-800 px-4 py-2 rounded inline-block";
		} else {
			counterDisplay.className =
				"text-lg font-bold mt-2 bg-white text-blue-600 px-4 py-2 rounded inline-block";
		}
	});

	const initialCounter = store.getState("counter");

	if (initialCounter !== undefined) {
		counterDisplay.innerText = `شمارنده: ${initialCounter}`;
	}

	store.subscribe("productsCount", (count) => {
		const productsCount = count !== undefined ? count : 0;
		productsCountDisplay.innerText = `تعداد محصولات: ${productsCount}`;
	});

	const initialProductsCount = store.getState("productsCount");
	if (initialProductsCount !== undefined) {
		productsCountDisplay.innerText = `تعداد محصولات: ${initialProductsCount}`;
	}

	return footer;
}
