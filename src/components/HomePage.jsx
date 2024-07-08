import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';
import { CgShoppingCart } from 'react-icons/cg';

function HomePage() {
  return (
    <header>
      <nav className='px-4 py-4  h-16'>
        <div className='flex justify-between h-full items-center max-w-6xl mx-auto'>
          <img src={logo} alt='logo' className='w-28' />
          <div className='capitalize flex items-center text-sm gap-4'>
            <NavLink to={'/'}>product listing</NavLink>
            <NavLink to={'/cart'}>
              {' '}
              <span className=' md:hidden border border-dark h-8 grid place-items-center w-8 rounded-full'>
                <CgShoppingCart className=' text-xl' />
              </span>{' '}
              <span className='hidden md:flex'>My Cart</span>
            </NavLink>
            <NavLink to={'/checkout'}>
              {' '}
              <span className='md:hidden border border-dark h-8 grid place-items-center w-8 rounded-full'>
                <MdOutlineShoppingCartCheckout className='md:hidden text-xl' />
              </span>{' '}
              <span className='hidden md:flex'>Checkout</span>
            </NavLink>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </header>
  );
}

export default HomePage;
