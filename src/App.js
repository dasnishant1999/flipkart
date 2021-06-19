import "./App.css";
import ProductsPage from "./components/ProductsPage";
import ProductsDataLayer from "./context/ProductsDataLayer";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <ProductsDataLayer>
        <ProductsPage />
      </ProductsDataLayer>
    </div>
  );
}

export default App;
