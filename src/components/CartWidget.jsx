import carrito from '../assets/carrito.png'

function CartWidget () {
    return (
    <div>
        <img className="cart" src={carrito} />
        <span className="cartNotification">3</span>
    </div>
    );
};

export default CartWidget