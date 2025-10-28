import { El } from "../../utils/el";

export function Footer() {
	return El({
		element: "div",
		innerHTML: "footer element",
		className:
			"bg-blue-400 fixed bottom-0 w-full p-4 text-center font-bold text-white",
	});
}
