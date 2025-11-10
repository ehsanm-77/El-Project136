import { El } from "../../utils/el";
import { store } from "../../utils/store";

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

	return El({
		element: "div",
		className:
			"bg-blue-400 grid grid-cols-3 p-4 m-4 shadow-xl rounded-xl text-white font-bold text-center",
		dataset: "1",
		restAttrs: {
			id: "first-element",
		},
		children: [
			El({
				element: "div",
				className: "flex flex-col gap-2",
				children: [
					El({
						element: "div",
						className: "flex gap-2",
						children: [
							El({
								element: "button",
								innerText: "login",
								className:
									"border-0 w-20 cursor-pointer bg-yellow-300 rounded-md p-2",
								eventListener: [
									{
										event: "click",
										callback: handleLogin,
									},
								],
							}),
							El({
								element: "button",
								innerText: "Open Modal",
								className:
									"border-0 w-28 cursor-pointer bg-green-400 rounded-md p-2 hover:bg-green-500",
								eventListener: [
									{
										event: "click",
										callback: handleOpenModal,
									},
								],
							}),
						],
					}),
					// ردیف دوم: دکمه‌های counter
					El({
						element: "div",
						className: "flex gap-2 items-center",
						children: [
							El({
								element: "button",
								innerText: "➖ کاهش",
								className:
									"border-0 w-24 cursor-pointer bg-red-400 rounded-md p-2 hover:bg-red-500 text-sm",
								eventListener: [
									{
										event: "click",
										callback: handleDecrement,
									},
								],
							}),
							El({
								element: "button",
								innerText: "➕ افزایش",
								className:
									"border-0 w-24 cursor-pointer bg-purple-400 rounded-md p-2 hover:bg-purple-500 text-sm",
								eventListener: [
									{
										event: "click",
										callback: handleIncrement,
									},
								],
							}),
							El({
								element: "button",
								innerText: "🔄 ریست",
								className:
									"border-0 w-20 cursor-pointer bg-gray-400 rounded-md p-2 hover:bg-gray-500 text-sm",
								eventListener: [
									{
										event: "click",
										callback: handleReset,
									},
								],
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				// innerText: "hello world",
				className: "flex gap-2 flex-col",
				children: [
					El({
						element: "div",
						innerText: "hello world!",
					}),
					El({
						element: "div",
						children: [
							El({
								element: "input",
								className: "bg-red-400 p-2 rounded-xl mb-2",
								eventListener: [
									{
										event: "input",
										callback: handleChange,
									},
								],
							}),
							El({
								element: "button",
								innerText: "Sent Name",
								className: "bg-yellow-400 rounded-xl p-2",
								eventListener: [
									{
										event: "click",
										callback: handleSetUserName,
									},
								],
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				innerText: "LOGO",
				className: "bg-red-400 w-fit ml-auto p-2",
			}),
			El({
				element: "div",
			}),
		],
	});
}
