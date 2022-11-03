import React, {} from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./Context/CartContext";
import { NotificationProvider } from "./Notification/notification";
import CartListContainer from "./Components/CartListContainer/CartListContainer";

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route
                path="/detail/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<CartListContainer />} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
