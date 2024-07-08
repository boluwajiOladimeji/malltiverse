import { FaRegStar } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa6';

import { formatNumber } from '../utils/helpers';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart/cartSlice';

function SingleProduct({ product }) {
  const dispatch = useDispatch();
  const handleAddItem = (id) => {
    console.log(product.id);
    const newItem = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      img: product.img,
      quantity: 1,
      totalPrice: product.price * 1,
    };
    dispatch(addItem(newItem));
  };
  return (
    <article className='space-y-4' key={product.id}>
      <div className='bg-light-gray flex justify-center py-6  h-40 border border-transparent hover:border-reddish rounded'>
        <img
          src={product.img}
          alt={product.title}
          className='w-4/5 lg:w-full'
        />
      </div>
      <div className=''>
        <div className='space-y-1'>
          <h2 className='font-semibold text-xs lg:text-lg'>{product.name}</h2>
          <h3 className='text-xs lg:text-sm min-h-9'>{product.description}</h3>
          <div className='flex gap-1'>
            {Array.from({ length: 5 }, (_, index) => {
              return index + 1 <= product.rating ? (
                <FaStar className='text-yello' key={index} />
              ) : (
                <FaRegStar className='text-yello' key={index} />
              );
            })}
          </div>
        </div>
        <p className='text-reddish mt-2'>{formatNumber(product.price)}</p>
      </div>
      <button
        className='py-2 px-4 rounded-xl hover:bg-reddish border border-reddish text-xs'
        onClick={handleAddItem}
      >
        Add to Cart
      </button>
    </article>
  );
}
export default SingleProduct;
