import React from 'react';
import './Item.css';
import ItemCounter from '../ItemCounter/ItemCounter';
import { Link } from 'react-router-dom'


const Item = ({ id, name, img, price, description, stock, handleOnAdd, isDetail, showGoToCart }) => {
    return (
        <article className={`card tarjeta ${isDetail ? 'tarjeta-detalle': ''}`}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {
                    isDetail && (
                        stock ? (
                            <div>
                                <p>{description}</p>

                                { showGoToCart ? (
                                    <div style={{display: 'grid'}}> 
                                        <Link to={"/cart"} className="btn btn-primary boton-detalle">Ir al carrito</Link>
                                        <Link to={"/"} className="btn btn-primary boton-detalle">Seguir comprando</Link>

                                    </div>
                                ) : (
                                    <ItemCounter onAdd={handleOnAdd} stock={stock} />
                                )}
                            </div>
                        ) : <span>Producto sin stock</span>
                    )
                }
                <span className='precio'>$ {price}</span>
                {
                    !isDetail && (
                        <Link to={`/detail/${id}`} className="btn btn-primary boton-detalle">Ver detalle</Link>
                    )
                }
            </div>
        </article>
    )
}

export default Item