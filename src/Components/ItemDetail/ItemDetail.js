
import { useContext, useState } from 'react';
import Item from '../Item/Item';
import { Context } from '../../Context/CartContext';
import { NotificationContext } from '../../Notification/notification';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem } = useContext(Context);
    const {setNotification} = useContext(NotificationContext)

    const [showGoToCart, setShowGoToCart] = useState(false);

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        console.log(productToAdd);
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
        // <article className="CardItem">
        //     <header className="Header">
        //         <h2 className="ItemHeader">
        //             {name}
        //         </h2>
        //     </header>
        //     <picture>
        //         <img src={img} alt={name} className="ItemImg"/>
        //     </picture>
        //     <section>
        //         <p className="Info">
        //             Categoria: {category}
        //         </p>
        //         <p className="Info">
        //             Descripción: {description}
        //         </p>
        //         <p className="Info">
        //             Precio: {price}
        //         </p>
        //     </section>           
        //     <footer className='ItemFooter'>
        //         <ItemCounter onAdd={handleOnAdd} stock={stock} />
        //     </footer>
        // </article>
    );
}

export default ItemDetail