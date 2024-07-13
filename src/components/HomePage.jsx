import { Outlet, useNavigation } from 'react-router-dom';

import Nav from './Nav';
import Loader from '../ui/Loader';
import axios from 'axios';

function HomePage() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <header>
      <Nav />
      <main>{isLoading ? <Loader /> : <Outlet />}</main>
    </header>
  );
}

export default HomePage;
