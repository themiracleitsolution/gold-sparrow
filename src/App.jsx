import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import ProductDetails from "./components/ProductDetails";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/products/:tab"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/products/:tab/:name"
          element={
            <Layout>
              <ProductDetails />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        {/* <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
