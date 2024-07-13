import axios from 'axios';
import Back from '../components/Back';
import { useLoaderData, useNavigate } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import Footer from './Footer';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  // Get the 'page' parameter
  const page = searchParams.get('page') || 1;
  const size = searchParams.get('size') || 10;
  const realUrl = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=3095cc2970c74dd58f4bf6fd55647956&reverse_sort=false&page=${page}&size=10&Appid=G79PBOPHV9G8OK5&Apikey=6894802b04a447d7a5cefacfdf8fd1e120240712121351298521`;
  const data = await axios(`${realUrl}`);
  const items = data.data;

  return { items, page, size };
};

function AllProducts() {
  const { items } = useLoaderData();
  const navigate = useNavigate();

  const nextPage = items.next_page;
  const prevPage = items.previous_page;
  console.log(items);
  console.log(nextPage);
  console.log(prevPage);

  const products = items.items.map((item) => {
    const { available_quantity: rating, description, name, photos, id } = item;
    const price = item.current_price[0].NGN[0];
    const img = `https://api.timbu.cloud/images/${item.photos[0].url}`;
    const category = item?.categories[0]?.name;

    return { rating, description, name, price, photos, img, category, id };
  });

  const handleNextPage = () => {
    if (!nextPage) return;
    navigate(nextPage);
    console.log('clicked');
  };
  const handlePrevPage = () => {
    if (!prevPage) return;
    navigate(prevPage);
  };

  return (
    <>
      <div className='px-4 py-6'>
        <div className='max-w-6xl mx-auto space-y-6'>
          <Back />
          <div className='space-y-12'>
            <section className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 gap-y-12'>
              {products.map((product) => {
                return <SingleProduct product={product} key={product.id} />;
              })}
            </section>
            <section className='flex gap-4 justify-end '>
              <button
                className={`bg-reddish py-2 hover:bg-transparent hover:text-reddish transition-all duration-300 ease-in px-6 w-24 text-white tracking-wider border border-reddish ${
                  !prevPage && 'hidden'
                }`}
                onClick={handlePrevPage}
              >
                Prev
              </button>
              <button
                className={`bg-reddish py-2 px-6 w-24 hover:bg-transparent hover:text-reddish transition-all duration-300 ease-in text-white tracking-wider border border-reddish ${
                  !nextPage && 'hidden'
                }`}
                onClick={handleNextPage}
              >
                Next
              </button>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllProducts;
