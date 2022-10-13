import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    console.log(productId)

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <Loading />
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...product} />
        </div>
    )
};

export default ItemDetailContainer;