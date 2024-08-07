import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';

import Nav from './Nav';
import Loader from '../ui/Loader';
import axios from 'axios';

const realUrl =
  'https://timbu-get-all-products.reavdev.workers.dev/?organization_id=3095cc2970c74dd58f4bf6fd55647956&reverse_sort=false&page=1&size=30&Appid=G79PBOPHV9G8OK5&Apikey=6894802b04a447d7a5cefacfdf8fd1e120240712121351298521';

export const loader = async () => {
  const data = await axios(`${realUrl}`);
  const itemProducts = data.data.items;
  return itemProducts;
};

function HomePage() {
  const navigation = useNavigation();
  const myProducts = useLoaderData();
  const products = myProducts.map((item) => {
    const { available_quantity: rating, description, name, photos, id } = item;
    const price = item.current_price[0].NGN[0];
    const img = `https://api.timbu.cloud/images/${item.photos[0].url}`;
    const category = item?.categories[0]?.name;

    return { rating, description, name, price, photos, img, category, id };
  });
  const isLoading = navigation.state === 'loading';
  return (
    <header>
      <Nav />
      <main>{isLoading ? <Loader /> : <Outlet context={products} />}</main>
    </header>
  );
}

export default HomePage;
