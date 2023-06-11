import './cart-item.scss';

const CartItem = ({cartItem }) =>{
    const {name, quantity, imageUrl, price} = cartItem;
    return (
        <div className='cart-item-container'>
            <img  src={imageUrl} alt={`${name}`}/>
            <div>
            <span className='name'>{name}</span> <br></br>
            <span className='price'>{quantity} * ${price}</span>
            </div>
           
        </div>
    )
}

export default CartItem