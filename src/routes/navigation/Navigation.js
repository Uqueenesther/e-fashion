import { Fragment, useContext} from 'react';
import {  Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../crown.svg';
import './Navigation.scss';
import CartDropdown from '../../component/cart-dropdown/Cart-dropdown';
import CartIcon from '../../component/cart-icon/Cart-icon';
import { UserContext } from '../../context/User.context';
import { CartContext } from '../../context/Cart.context';
import { signOutUser } from '../../utils/firebase/Firebase';


const Navigation = () =>{
  const {currentUser} = useContext(UserContext);
const {isCartOpen}=useContext(CartContext)


    return(
      <Fragment>
        <div className='navigation'>
            <Link to='/' className='logo-container'>
                 <CrwnLogo  className='logo'/>
            </Link>
            <div className='nav-links-container'>
                 <Link to="/Shop" className='nav-link'>SHOP</Link>
                
                 {
                 currentUser ?  (
                  <span className='nav-link' onClick={signOutUser}> SIGN OUT</span>
                 ):( <Link to="/Authentication" className='nav-link'>SIGN IN</Link>)
                 }
                  <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;