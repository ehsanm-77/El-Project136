import "../src/style/style.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Products } from "./components/products/product";

const app = document.getElementById("app");

app.append(Header(), Footer(), Products());
