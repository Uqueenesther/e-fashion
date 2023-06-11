import './Cart-dropdown.scss';
// import { v4 as uuidv4 } from 'uuid';

import Button from '../button/Button';
import CartItem from '../cart-item/cart-item';
import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';



const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
          <div className='cart-items' />
          <div >
            {cartItems.map((item, id) => <CartItem  cartItem={item} key={id}/>)}
            {/* {cartItems.map((item) => ( <CartItem key={uuidv4()} cartItem={item} />))} */}

          </div>
            <Button>GO TO CHECKOUT</Button>
          
        </div>
    )
}
 
export default CartDropdown;