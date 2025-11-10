import { El } from "../../utils/el";
import { store } from "../../utils/store";

export function Modal() {
	const backdrop = El({
		element: "div",
		className:
			"fixed inset-0 bg-black bg-opacity-50 z-40 hidden items-center justify-center",
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
			"bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4 relative",
		children: [
			El({
				element: "button",
				innerText: "✕",
				className:
					"absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center",
				eventListener: [
					{
						event: "click",
						callback: () => {
							store.setState("isModalOpen", false);
						},
					},
				],
			}),
			El({
				element: "h2",
				innerText: "Modal Title",
				className: "text-2xl font-bold mb-4 text-gray-800",
			}),
			El({
				element: "div",
				className: "flex gap-2 justify-end",
				children: [
					El({
						element: "button",
						innerText: "Cancel",
						className:
							"px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 w-full",
						eventListener: [
							{
								event: "click",
								callback: () => {
									store.setState("isModalOpen", false);
								},
							},
						],
					}),
					El({
						element: "button",
						innerText: "OK",
						className:
							"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full",
						eventListener: [
							{
								event: "click",
								callback: () => {
									alert("OK clicked!");
									store.setState("isModalOpen", false);
								},
							},
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
		} else {
			backdrop.classList.add("hidden");
			backdrop.classList.remove("flex");
		}
	});

	return backdrop;
}
