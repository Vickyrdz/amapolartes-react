import React from "react";
import { useState, useContext } from "react";
import { Context } from "../../Context/CartContext";
import {
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase/index";

import { NotificationContext } from "../../Notification/notification";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const { cart, totalQuantity, clearCart } = useContext(Context);
  const { setNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  const createOrder = async (buyer, event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const objOrder = {
        buyer,
        item: cart,
        total: totalQuantity,
      };

      const batch = writeBatch(db);

      const outStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "products");

      const productsAddedFromFirestone = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestone;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id == doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outStock.length == 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");

        await addDoc(orderRef, objOrder);

        clearCart();

        setTimeout(() => {
          navigate("/");
        }, 2000);

        setNotification("success", "Su orden fue creada con éxito");
      } else {
        setNotification("error", "Hay productos que estan fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <>
          {" "}
          <div className="loading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              fill="currentColor"
              class="bi bi-hourglass-split"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
            </svg>
          </div>
        </>
        <span style={{ fontWweight: "bold", fontSize: "large" }}>
          Se está generando su orden...
        </span>
      </>
    );
  }

  return (
    <div>
      <CheckoutForm createOrder={createOrder} />
    </div>
  );
};

export default Checkout;
