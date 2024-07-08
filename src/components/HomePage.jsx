import { Outlet } from 'react-router-dom';

import Nav from './Nav';

function HomePage() {
  return (
    <header>
      <Nav />
      <main>
        <Outlet />
      </main>
    </header>
  );
}

export default HomePage;
