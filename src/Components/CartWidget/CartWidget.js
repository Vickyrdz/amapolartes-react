import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <img
                style={{ width: 30, height: 30, marginRight: 8}}
                src={cart} alt="cart"
            />
            5
        </div>   
    );
};

export default CartWidget;