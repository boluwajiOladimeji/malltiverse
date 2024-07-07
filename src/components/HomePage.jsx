import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function HomePage() {
  return (
    <header>
      <nav className='px-4 py-4  h-16'>
        <div className='flex justify-between h-full items-center max-w-6xl mx-auto'>
          <img src={logo} alt='logo' className='h-6' />
          <div className='capitalize flex gap-4'>
            <NavLink to={'/'}>product listing</NavLink>
            <NavLink to={'/cart'}>cart</NavLink>
            <NavLink to={'/checkout'}>checkout</NavLink>
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
