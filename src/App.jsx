import axios from "axios";
import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";
import { Footer } from "./Footer";
import { ProductsIndex } from "./ProductsIndex";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <ProductsPage />
      <ProductsIndex />
      <Footer />
    </div>
  )
}

export default App;