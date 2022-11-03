import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { useNavigate } from "react-router-dom";

const ItemList = ({ products, setPage }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="ListGroup">
        {products.map((prod) => (
            <Item key={prod.id} {...prod} setPage={setPage} />
        ))}
      </div>
      <div>
        <button className="ComeBack arreglo" onClick={() => navigate(-1)}>
          Volver atrás
        </button>
      </div>
    </>
  );
};

export default ItemList;
