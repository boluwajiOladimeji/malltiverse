import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { formatNumber } from '../utils/helpers';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart/cartSlice';
import { useState } from 'react';
import Back from '../components/Back';

export const loader = async ({ params }) => {
  const id = params.productId;

  const testUrl = `https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=3095cc2970c74dd58f4bf6fd55647956&Appid=G79PBOPHV9G8OK5&Apikey=6894802b04a447d7a5cefacfdf8fd1e120240712121351298521`;

  const data = await axios(testUrl);

  return { id, data };
};

function ProductDetailsSingle() {
  const [activeImg, setActiveImg] = useState(0);
  const {
    data: { data },
  } = useLoaderData();

  const dispatch = useDispatch();
  const handleAddItem = () => {
    const newItem = {
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.current_price,
      img: `https://api.timbu.cloud/images/${data.photos[0].url}`,
      quantity: 1,
      totalPrice: data.current_price * 1,
    };
    dispatch(addItem(newItem));
  };
  const photos = data.photos.map((photo) => {
    return `https://api.timbu.cloud/images/${photo.url}`;
  });
  return (
    <div className='px-4 py-8 md:py-24'>
      <div className='max-w-6xl mx-auto space-y-6'>
        <Back />
        <div className=' space-y-12 md:grid md:grid-cols-2 md:gap-12 md:space-y-0'>
          <div className=' flex flex-col justify-between'>
            <div className='space-y-6'>
              <div className=' grid place-items-center h-60'>
                <img
                  src={photos[activeImg]}
                  alt=''
                  className='w-4/5 h-40 object-contain'
                />
              </div>
              <div
                className={`grid grid-cols-${photos.length} gap-2 md:mt-auto`}
              >
                {photos.map((photo, idx) => {
                  return (
                    <div
                      className={`bg-light-gray cursor-pointer p-6 grid place-items-center rounded-md border ${
                        idx === activeImg
                          ? ' border-reddish'
                          : 'border-light-gray'
                      } `}
                      onClick={() => setActiveImg(idx)}
                      key={photo}
                    >
                      <img src={photo} alt='' className='w-10 object-contain' />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 justify-between'>
            <h2 className='text-3xl font-bold'>{data.name}</h2>
            <p className='text-slate-500 leading-8'>{data.description}</p>
            <p className='font-semibold text-xl'>
              {formatNumber(data.current_price)}
            </p>
            <button
              className='bg-reddish py-3 px-7 rounded text-light border border-reddish hover:bg-transparent hover:text-dark justify-self-end self-start'
              onClick={handleAddItem}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailsSingle;
