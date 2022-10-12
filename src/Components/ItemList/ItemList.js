// import './ItemList.css'
import React from 'react';
import Item from '../Item/Item';

const ItemList = ({products, setPage }) => {
    return(
        <div className='ListGroup' onClick={() => console.log('hice click en itemlist')}>
            {products.map(prod => <Item key={prod.id} {...prod} setPage={setPage}/>)}
        </div>    
    )
}

export default ItemList