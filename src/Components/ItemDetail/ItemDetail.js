
import { useContext, useState } from 'react';
import Item from '../Item/Item';
import { Context } from '../../Context/CartContext';
import { NotificationContext } from '../../Notification/notification';

const ItemDetail = ({ id, name, img, description, price, stock }) => {

    const { addItem } = useContext(Context);
    const {setNotification} = useContext(NotificationContext)

    const [showGoToCart, setShowGoToCart] = useState(false);

    const handleOnAdd = (quantity) => {
        const productToAdd = { id, name, price, quantity };
        setShowGoToCart(true);
        addItem(productToAdd)
        setNotification ('success', '¡Tu producto seleccionado ya se encuentra en el carrito!')
    }

    return (
        <Item
            id={id}
            name={name}
            img={img}
            description={description}
            price={price}
            stock={stock}
            handleOnAdd={handleOnAdd}
            isDetail
            showGoToCart={showGoToCart}
        />
    )
}

export default ItemDetail