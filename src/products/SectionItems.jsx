import axios from 'axios';
import Title from '../ui/Title';
// import products from './prod';

import SingleProduct from './SingleProduct';
import { useLoaderData } from 'react-router-dom';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const mainUrl =
  'https://api.timbu.cloud/products?organization_id=3095cc2970c74dd58f4bf6fd55647956&reverse_sort=false&page=1&size=20&Appid=G79PBOPHV9G8OK5&Apikey=6894802b04a447d7a5cefacfdf8fd1e120240712121351298521';
// const url =
//   'api/products?organization_id=3095cc2970c74dd58f4bf6fd55647956&reverse_sort=false&page=1&size=20&Appid=G79PBOPHV9G8OK5&Apikey=6894802b04a447d7a5cefacfdf8fd1e120240712121351298521';

export const loader = async () => {
  const data = await axios(`${proxyUrl}${mainUrl}`);
  console.log(data);
  const itemProducts = data.data.items;
  const myProducts = itemProducts.map((item) => {
    const { available_quantity: rating, description, name, photos, id } = item;
    const price = item.current_price[0].NGN[0];
    const img = `https://api.timbu.cloud/images/${item.photos[0].url}`;
    const category = item.categories[0].name;

    return { rating, description, name, price, photos, img, category, id };
  });
  return myProducts;
};

function SectionItems({ category, title }) {
  const products = useLoaderData();

  const displayedProducts = products.filter(
    (product) => product.category === category
  );

  if (!displayedProducts) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='max-w-6xl mx-auto py-4'>
      <Title title={title} />
      <div className='grid grid-cols-2 md:grid-cols-3 md:gap-8 gap-4'>
        {displayedProducts.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
export default SectionItems;
