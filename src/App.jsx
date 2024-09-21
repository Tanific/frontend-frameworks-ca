import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homePage";
import Productpage from "./pages/productPage";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/product/:id" element={<Productpage />} />
            </Routes>
        </Router>
    );
}
export default App; 