import cart from "./assets/cart.svg";
import { useContext } from "react";
import { Context } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(Context);
  return (
    <Link to="/cart">
      <button
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#299190",
          border: "none",
        }}
      >
        <img
          style={{ width: 30, height: 30, marginRight: 8 }}
          src={cart}
          alt="cart"
        />
        <div style={{ color: "white", fontWeight: "bold" }}>
          {totalQuantity}
        </div>
      </button>
    </Link>
  );
};

export default CartWidget;
