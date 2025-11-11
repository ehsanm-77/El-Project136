import "../src/style/style.css";
import { Footer } from "./components/shared/footer/footer";
import { Header } from "./components/shared/header/header";
import { Modal } from "./components/shared/modal/modal";
import { HomePage } from "./pages/home/home";
import { MyNamePage } from "./pages/my-name/myName";
import { ProductDetailPage } from "./pages/product-detail/productDetail";
import { ProductsPage } from "./pages/products/products";
import { router } from "./utils/router";

const app = document.getElementById("app");

app.appendChild(Header());

const pageContainer = document.createElement("div");
app.appendChild(pageContainer);

app.appendChild(Footer());
app.appendChild(Modal());

router.addRoute("/", HomePage);
router.addRoute("/products", ProductsPage);
router.addRoute("/product/:id", ProductDetailPage);
router.addRoute("/my-name/:name", MyNamePage);

router.init(pageContainer);
