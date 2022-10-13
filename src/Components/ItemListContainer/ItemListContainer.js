import React, { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from "../../asyncMock.js"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';
import './ItemListContainer.css'

const ItemListContainer = ({ greeting  }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
       
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])


    if(loading) {
        return <Loading />;
    }


    return (
        <div className="ItemListContainer" onClick={() => console.log('click en itemlistcontainer')}>
            {/* <button onClick={(e) => console.log(e)}>boton</button> */}
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer