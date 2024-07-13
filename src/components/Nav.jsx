import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';
import { CgShoppingCart } from 'react-icons/cg';

function Nav() {
  return (
    <nav className='px-4 py-4  h-16'>
      <div className='flex justify-between h-full items-center max-w-6xl mx-auto'>
        <Link to={'/'}>
          <img src={logo} alt='logo' className='w-28' />
        </Link>

        <div className='capitalize flex items-center text-sm gap-4'>
          <NavLink to={'/products?page=1&size=10'}>products</NavLink>
          <NavLink to={'/cart'}>
            {' '}
            <span className=' md:hidden   h-8 grid place-items-center w-8'>
              <CgShoppingCart className=' text-xl' />
              {/* <img src={shoppingCart} alt='cart' /> */}
            </span>{' '}
            <span className='hidden md:flex'>My Cart</span>
          </NavLink>
          <NavLink to={'/checkout'}>
            {' '}
            <span className='md:hidden h-8 grid place-items-center w-8'>
              <MdOutlineShoppingCartCheckout className='md:hidden text-xl' />
            </span>{' '}
            <span className='hidden md:flex'>Checkout</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
