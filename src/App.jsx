import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";

import PageLoader from "./components/PageLoader";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HashRouter>
      {loading && <PageLoader />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:slug"
          element={<ProductDetails />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;