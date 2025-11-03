import { El } from "../../utils/el.js";

export function Products() {
	const API_URL = "https://6908e3c92d902d0651b20c81.mockapi.io/users"; // آدرس پروژه‌ت تو mockapi.io
	const container = El({
		element: "div",
		className: "p-6 flex flex-col gap-4",
	});

	// === فرم اضافه کردن محصول (POST) ===
	const form = El({
		element: "form",
		className: "flex gap-2",
		children: [
			El({
				element: "input",
				placeholder: "Product name",
				className: "border p-2 rounded w-1/3",
				id: "name",
			}),
			El({
				element: "input",
				placeholder: "Price",
				className: "border p-2 rounded w-1/3",
				id: "price",
			}),
			El({
				element: "button",
				innerText: "Add Product",
				className: "bg-blue-500 text-white px-4 rounded hover:bg-blue-600",
				type: "submit",
			}),
		],
	});

	// اضافه کردن فرم بالای لیست
	container.append(form);

	// === لیست محصولات ===
	const productsGrid = El({
		element: "div",
		className: "grid grid-cols-3 gap-4",
	});
	container.append(productsGrid);

	// 🧠 تابع GET: دریافت لیست محصولات
	async function fetchProducts() {
		productsGrid.innerHTML = "Loading...";
		try {
			const res = await fetch(API_URL);
			const data = await res.json();

			productsGrid.innerHTML = "";
			console.log(data);
			data.forEach((item) => {
				const card = El({
					element: "div",
					className:
						"bg-gray-100 p-4 rounded shadow flex flex-col items-center gap-2",
					children: [
						El({
							element: "div",
							innerText: item.name,
							className: "font-semibold text-center",
						}),
						El({
							element: "div",
							innerText: `$${item.age}`,
							className: "text-green-600 font-bold",
						}),

						// دکمه ویرایش (PUT)
						El({
							element: "button",
							innerText: "Edit",
							className: "bg-yellow-400 px-2 py-1 rounded text-sm",
							eventListener: [
								{
									event: "click",
									callback: async () => {
										const newName = prompt("Enter new name:", item.name);
										const newPrice = prompt("Enter new price:", item.price);
										if (!newName || !newPrice) return;

										await fetch(`${API_URL}/${item.id}`, {
											method: "PUT",
											headers: { "Content-Type": "application/json" },
											body: JSON.stringify({
												name: newName,
												price: newPrice,
											}),
										});
										fetchProducts();
									},
								},
							],
						}),

						// دکمه حذف (DELETE)
						El({
							element: "button",
							innerText: "Delete",
							className: "bg-red-500 text-white px-2 py-1 rounded text-sm",
							eventListener: [
								{
									event: "click",
									callback: async () => {
										if (confirm("Are you sure?")) {
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
				});

				productsGrid.append(card);
			});
		} catch (err) {
			console.error(err);
			productsGrid.innerHTML = "❌ Failed to load products.";
		}
	}

	// 🚀 POST: اضافه کردن محصول جدید
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

	// بارگذاری اولیه محصولات
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
