import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ id, name, price, quantity }) => {
  const itemFinalPrice = price * quantity;

  const {removeItem} = useContext(Context)

  return (
    <article>
      <div>
        <ul class="list-group list-group  containerCart">
          <li class="list-group-item d-flex justify-content-between align-items-start cartItem">
            <div class="ms-2 me-auto">
              <div className="fw-bold rounded nameCart">·{name}·</div>
              <div className="descriptionCart">
                {" "}
                Cantidad seleccionada: {quantity}
              </div>
              <div className="descriptionCart">Precio Unitario: ${price}</div>
            </div>
            <div className="buttons">
                <span class="rounded btnCart"> $ {itemFinalPrice}</span>
                <button onClick={()=> removeItem(id)} type="button" class="btn btn-outline-danger deleteCart">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="20"
                        fill="currentColor"
                        class="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>
                    </svg>
                
                </button>
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ItemCart;
