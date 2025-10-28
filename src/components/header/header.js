import { El } from "../../utils/el";

export function Header() {
	const handleLogin = () => {
		console.log("button clicked");
	};

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
				element: "button",
				innerText: "login",
				className: "border-0 w-20 cursor-pointer bg-yellow-300 rounded-md p-2",
				eventListener: [
					{
						event: "click",
						callback: handleLogin,
					},
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
						innerText: "React-136",
					}),
				],
			}),
			El({
				element: "div",
				innerText: "LOGO",
				className: "bg-red-400 w-fit ml-auto p-2",
			}),
		],
	});
}
