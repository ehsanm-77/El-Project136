import { El } from "../../../utils/el";
import { router } from "../../../utils/router";
import { store } from "../../../utils/store";

export function Header() {
	let userName = "";
	if (store.getState("counter") === undefined) {
		store.setState("counter", 0);
	}

	const handleLogin = () => {
		console.log("button clicked");
	};

	const handleOpenModal = () => {
		store.setState("isModalOpen", true);
		store.setState("sharedValue", "مقدار از هدر تغییر کرد!");
	};

	const handleIncrement = () => {
		const currentValue = store.getState("counter") || 0;
		store.setState("counter", currentValue + 1);
	};

	const handleDecrement = () => {
		const currentValue = store.getState("counter") || 0;
		store.setState("counter", currentValue - 1);
	};

	const handleReset = () => {
		store.setState("counter", 0);
	};

	const handleChange = (e) => {
		userName = e.target.value;
	};

	const handleSetUserName = () => {
		store.setState("userName", userName);
	};

	store.setState("userName", "ali");

	const header = El({
		element: "nav",
		className: "bg-white shadow-lg sticky top-0 z-30 border-b border-gray-200",
		children: [
			El({
				element: "div",
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: [
					El({
						element: "div",
						className: "flex justify-between items-center h-16",
						children: [
							// Logo و Navigation
							El({
								element: "div",
								className: "flex items-center gap-8",
								children: [
									El({
										element: "div",
										children: [
											El({
												element: "div",
												className: "flex items-center gap-2",
												children: [
													El({
														element: "img",
														src: "/images/logo.png",
														className: "w-10 h-10",
													}),
													El({
														element: "button",
														innerText: " دوره 136",
														className:
															"text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all",
														eventListener: [
															{
																event: "click",
																callback: () => {
																	router.navigate("/");
																},
															},
														],
													}),
												],
											}),
										],
										className:
											"text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all",
										eventListener: [
											{
												event: "click",
												callback: () => {
													router.navigate("/");
												},
											},
										],
									}),
									El({
										element: "div",
										className: "hidden md:flex items-center gap-4",
										children: [
											El({
												element: "button",
												innerText: "صفحه اصلی",
												className:
													"px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium",
												eventListener: [
													{
														event: "click",
														callback: () => {
															router.navigate("/");
														},
													},
												],
											}),
											El({
												element: "button",
												innerText: "کاروندان",
												className:
													"px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium",
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

							// Actions و User Info
							El({
								element: "div",
								className: "flex items-center gap-4",
								children: [
									// Counter Controls (مخفی در موبایل)
									El({
										element: "div",
										className:
											"hidden lg:flex items-center gap-2 bg-gray-100 rounded-lg p-1",
										children: [
											El({
												element: "button",
												innerText: "−",
												className:
													"w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded hover:bg-red-600 transition-colors font-bold",
												eventListener: [
													{
														event: "click",
														callback: handleDecrement,
													},
												],
											}),
											El({
												element: "span",
												innerText: "0",
												className:
													"px-3 font-semibold text-gray-700 min-w-[2rem] text-center",
												restAttrs: {
													id: "header-counter",
												},
											}),
											El({
												element: "button",
												innerText: "+",
												className:
													"w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded hover:bg-green-600 transition-colors font-bold",
												eventListener: [
													{
														event: "click",
														callback: handleIncrement,
													},
												],
											}),
										],
									}),

									// دکمه‌های اصلی
									El({
										element: "div",
										className: "flex items-center gap-2",
										children: [
											El({
												element: "button",
												innerText: "Modal",
												className:
													"px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg font-medium",
												eventListener: [
													{
														event: "click",
														callback: handleOpenModal,
													},
												],
											}),
											El({
												element: "button",
												innerText: "ورود",
												className:
													"px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg font-medium",
												eventListener: [
													{
														event: "click",
														callback: handleLogin,
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
			}),
		],
	});

	// Subscribe به counter برای به‌روزرسانی نمایش
	store.subscribe("counter", (value) => {
		const counterDisplay = document.getElementById("header-counter");
		if (counterDisplay) {
			counterDisplay.innerText = value !== undefined ? value : 0;
		}
	});

	return header;
}
