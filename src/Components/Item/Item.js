import React from 'react';
import './Item.css';
import ItemCounter from '../ItemCounter/ItemCounter';
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, description, stock, handleOnAdd, isDetail }) => {
    return (
        <article className={`card tarjeta ${isDetail ? 'tarjeta-detalle': ''}`}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {
                    isDetail && (
                        <div>
                            <p>{description}</p>
                            <ItemCounter onAdd={handleOnAdd} stock={stock} />
                        </div>
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