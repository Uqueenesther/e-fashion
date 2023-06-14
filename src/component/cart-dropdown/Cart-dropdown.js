import './Cart-dropdown.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/Cart.context';
// import { v4 as uuidv4 } from 'uuid';
import Button from '../button/Button';
import CartItem from '../cart-item/cart-item';



const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () =>{
    navigate('/checkout')
  }

    return (
        <div className='cart-dropdown-container'>
          <div className='cart-items' />
          <div >
            {cartItems.map((item, id) => <CartItem  cartItem={item} key={id}/>)}
            {/* {cartItems.map((item) => ( <CartItem key={uuidv4()} cartItem={item} />))} */}

          </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
          
        </div>
    )
}
 
export default CartDropdown;