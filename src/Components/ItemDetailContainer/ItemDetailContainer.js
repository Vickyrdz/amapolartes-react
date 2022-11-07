import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading';
import { useParams, useNavigate} from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = ( ) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    
    const navigate = useNavigate();

    useEffect(() => {

        const docRef = doc(db, 'products', productId);

        getDoc(docRef).then(response => {
            const data = response.data();
            const productAdapted = {id: response.id, ...data};
            setProduct(productAdapted);
        }).finally(()=> {
            setLoading(false);
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