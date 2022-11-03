import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading';
import { useParams, useNavigate} from 'react-router-dom'

const ItemDetailContainer = ( ) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    
    const navigate = useNavigate();

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

    return (
        <div className='ItemDetailContainer' >
            <ItemDetail {...product}/>
            <button className='ComeBack' onClick={() => navigate(-1)}>
                Volver atrás
            </button>
        </div>
    )
};

export default ItemDetailContainer;