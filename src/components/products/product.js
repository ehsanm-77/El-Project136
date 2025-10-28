import { products } from "../../constants/products";
import { El } from "../../utils/el";

export function Products() {
	return El({
		element: "div",
		className: "m-4 grid grid-cols-3 gap-4",
		children: products.map((item) => {
			return El({
				element: "div",
				className:
					"bg-gray-200 p-4 flex flex-col shadow-xl rounded-md justify-center items-center gap-2",
				children: [
					El({
						element: "img",
						src: "/images/1.jpg",
						className: "rounded-md",
						alt: "products-img",
					}),
					El({
						element: "div",
						innerText: item.name,
					}),
					El({
						element: "div",
						innerText: item.price,
					}),
				],
			});
		}),
	});
}
