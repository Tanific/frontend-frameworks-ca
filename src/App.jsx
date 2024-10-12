import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homePage";
import Productpage from "./pages/productPage";
import Contactpage from "./pages/contactPage";
import Cartpage from "./pages/cartPage";
import CheckoutSuccessPage from "./pages/successPage";
import { CartProvider } from "./components/cart/cartContext"; 

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<Productpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;