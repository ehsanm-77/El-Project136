import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { store } from "../../utils/store";

export function Products() {
	const API_URL = "https://6908e3c92d902d0651b20c81.mockapi.io/users";
	const container = El({
		element: "div",
		className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
		children: [
			// فرم اضافه کردن محصول
			El({
				element: "form",
				className:
					"bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100",
				children: [
					El({
						element: "h2",
						innerText: "افزودن کاروند جدید",
						className: "text-2xl font-bold mb-4 text-gray-800",
					}),
					El({
						element: "div",
						className: "flex flex-col sm:flex-row gap-4",
						children: [
							El({
								element: "input",
								placeholder: "نام کاروند",
								className:
									"flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",
								id: "name",
							}),
							El({
								element: "input",
								placeholder: "سن",
								className:
									"flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",
								id: "price",
								type: "number",
							}),
							El({
								element: "button",
								innerText: "➕ افزودن",
								className:
									"px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg font-semibold",
								type: "submit",
							}),
						],
					}),
				],
			}),
		],
	});

	const form = container.querySelector("form");

	const productsGrid = El({
		element: "div",
		className:
			"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
	});
	container.appendChild(productsGrid);

	async function fetchProducts() {
		productsGrid.innerHTML =
			"<div class='col-span-full text-center py-12'><div class='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div><p class='mt-4 text-gray-600'>در حال بارگذاری...</p></div>";
		try {
			const res = await fetch(API_URL);
			const data = await res.json();

			productsGrid.innerHTML = "";
			store.setState("productsCount", data.length);

			data.forEach((item) => {
				const card = El({
					element: "div",
					className:
						"bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col",
					children: [
						// تصویر محصول (placeholder)
						El({
							element: "div",
							className:
								"h-48 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center",
							children: [
								El({
									element: "div",
									innerText: "🛍️",
									className: "text-6xl opacity-80",
								}),
							],
						}),
						// محتوای کارت
						El({
							element: "div",
							className: "p-5 flex flex-col flex-grow",
							children: [
								El({
									element: "h3",
									innerText: item.name || "بدون نام",
									className:
										"text-xl font-bold mb-2 text-gray-800 line-clamp-2",
								}),
								El({
									element: "div",
									className: "flex items-center justify-between mb-4",
									children: [
										El({
											element: "span",
											innerText: "سن:",
											className: "text-gray-600 text-sm",
										}),
										El({
											element: "span",
											innerText: `${item.age || "0"} سال`,
											className: "text-2xl font-bold text-blue-600",
										}),
									],
								}),
								// دکمه مشاهده جزئیات
								El({
									element: "button",
									innerText: "مشاهده جزئیات",
									className:
										"w-full py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg font-semibold mb-3",
									eventListener: [
										{
											event: "click",
											callback: () => {
												router.navigate(`/product/${item.id}`);
											},
										},
									],
								}),
								// دکمه‌های ویرایش و حذف
								El({
									element: "div",
									className: "flex gap-2 mt-auto",
									children: [
										El({
											element: "button",
											innerText: "✏️ ویرایش",
											className:
												"flex-1 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors font-medium text-sm",
											eventListener: [
												{
													event: "click",
													callback: async () => {
														const newName = prompt("نام جدید:", item.name);
														const newAge = prompt("سن جدید:", item.age);
														if (!newName || !newAge) return;

														await fetch(`${API_URL}/${item.id}`, {
															method: "PUT",
															headers: { "Content-Type": "application/json" },
															body: JSON.stringify({
																name: newName,
																age: newAge,
															}),
														});
														fetchProducts();
													},
												},
											],
										}),
										El({
											element: "button",
											innerText: "🗑️ حذف",
											className:
												"flex-1 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium text-sm",
											eventListener: [
												{
													event: "click",
													callback: async () => {
														if (
															confirm(
																"آیا مطمئن هستید که می‌خواهید این کاروند را حذف کنید؟"
															)
														) {
															await fetch(`${API_URL}/${item.id}`, {
																method: "DELETE",
															});
															fetchProducts();
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
				});

				productsGrid.append(card);
			});
		} catch (err) {
			console.error(err);
			productsGrid.innerHTML =
				"<div class='col-span-full text-center py-12'><div class='text-red-500 text-2xl mb-2'>❌</div><p class='text-gray-600'>خطا در بارگذاری کاروندان</p></div>";
			store.setState("productsCount", 0);
		}
	}

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		const name = form.querySelector("#name").value;
		const price = form.querySelector("#price").value;

		if (!name || !price) return alert("Please fill all fields!");

		await fetch(API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, price }),
		});

		form.reset();
		fetchProducts();
	});

	fetchProducts();

	return container;
}

//https://fakestoreapi.com/products

// Practice

const app = document.getElementById("app");
const userName = document.getElementById("name");
const userAge = document.getElementById("age");
const btn = document.getElementById("submit-btn");

// GET

// async function getUserData() {
// 	try {
// 		const response = await fetch(
// 			"https://6908e3c92d902d0651b20c81.mockapi.io/users"
// 		);
// 		const data = await response.json();
// 		console.log(data);
// 		data.forEach((element) => {
// 			const div = document.createElement("div");
// 			div.innerHTML = element.age;
// 			app.append(div);
// 		});
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// getUserData();

// const myDiv = document.createElement("div");
// myDiv.innerHTML = "loading ...";
// app.append(myDiv);
// function getUserData() {
// 	const data = fetch("https://6908e3c92d902d0651b20c81.mockapi.io/users")
// 		.then((res) => res.json())
// 		.then((data) => {
// 			app.innerHTML = "";
// 			data.forEach((element) => {
// 				const div = document.createElement("div");
// 				const div2 = document.createElement("div");
// 				div.innerHTML = element.age;
// 				div;
// 				app.append(div);
// 			});
// 		})
// 		.catch((error) => console.log(error))
// 		.finally(() => console.log("khaste nabashid"));
// 	console.log(data);
// }

// getUserData();

// POST

// async function sendUserData() {
// 	const name = userName.value;
// 	const age = userAge.value;
// 	await fetch("https://6908e3c92d902d0651b20c81.mockapi.io/users", {
// 		method: "POST",
// 		headers: { "Content-Type": "application/json" },
// 		body: JSON.stringify({
// 			name,
// 			age,
// 		}),
// 	});
// }

// btn.addEventListener("click", sendUserData);

// DELETE

// async function sendUserData() {
// 	const name = userName.value;
// 	const age = userAge.value;
// 	await fetch("https://6908e3c92d902d0651b20c81.mockapi.io/users/21", {
// 		method: "DELETE",
// 	});
// }

// btn.addEventListener("click", sendUserData);
