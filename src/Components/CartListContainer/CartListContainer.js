import React, { useContext, useState } from "react";
import { Context } from "../../Context/CartContext.js";
import ItemCart from "../ItemCart/ItemCart";
import "./CartListContainer.css";
import { Link } from "react-router-dom";

const CartListContainer = ({}) => {
  const { cart } = useContext(Context);

  const totalCart = cart.reduce((montoAcumulado, item) => {
    return montoAcumulado + item.price * item.quantity;
  }, 0);

  return (
    <div className="CartListContainer">
      {cart.length ? (
        <>
          {
            cart.map((cartProduct) => {
              return <div>{<ItemCart {...cartProduct} />}</div>;
            })
          }
          <div className="totalCart rounded">· TOTAL FINAL = ${totalCart} ·</div>
          <Link
            to={"/checkout"}
            className="btn btn-outline-success finally rounded"
          >
            ¡Finalizar compra!
          </Link>
        </>
      ) : (
        <div>
          <div
            class="main-icon-without-slide icon-png-container pd-lv4"
            data-type="img"
            data-png="https://cdn-icons-png.flaticon.com/512/4555/4555971.png"
            data-id="4555971"
            data-premium=""
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png "
              width="200"
              height="200"
              style={{
                marginTop: "60px",
                marginRight: "30px",
                marginBottom: "60px",
              }}
              class="img-small"
            ></img>
          </div>

          <span className="textEmpty">
            ¡Aún no se ha añadido ningún producto al carrito!
          </span>

          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <b style={{ color: "#299190" }}>Ir al listado de productos</b>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartListContainer;
