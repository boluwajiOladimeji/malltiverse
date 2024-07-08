import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from './cartSlice';
import { formatNumber } from '../utils/helpers';

function SingleCartItem({ item }) {
  const dispatch = useDispatch();
  const handleIncreaseItem = () => {
    dispatch(increaseItemQuantity(item.id));
  };
  const handleDecreaseItem = () => {
    dispatch(decreaseItemQuantity(item.id));
  };
  const handleDeleteItem = () => {
    dispatch(deleteItem(item.id));
  };
  return (
    <div>
      <article className='flex md:hidden gap-6 text-xs bg-light-gray px-2 py-6 rounded'>
        <img src={item.img} className='w-14 max-h-14' alt={item.title} />
        <div className='space-y-2'>
          <h3 className='font-semibold'>{item.name}</h3>
          <h3 className='text-dark'>{item.description}</h3>
          <div className='flex gap-4 items-center'>
            <button
              className='h-6 w-6 border border-dark disabled:cursor-not-allowed'
              onClick={handleDecreaseItem}
              disabled={item.quantity === 1}
            >
              -
            </button>
            <p>{item.quantity}</p>
            <button
              className='h-6 w-6 border border-dark'
              onClick={handleIncreaseItem}
            >
              +
            </button>
          </div>
        </div>
        <div className='ml-auto flex flex-col justify-between items-center '>
          <button onClick={handleDeleteItem}>
            <RiDeleteBin5Line className='text-xl' />
          </button>
          <p>N{item.price}</p>
        </div>
      </article>
      {/* BIG SCREEN */}
      <article className='bg-light-gray rounded py-6 px-4 text-xs hidden md:grid justify-between items-center gap-8 grid-cols-7'>
        <div className='flex gap-6 items-center col-span-3'>
          <img src={item.img} alt={item.title} className='w-16 max-h-16' />
          <div className='space-y-2'>
            <h3 className='font-semibold'>{item.name}</h3>
            <h3 className='text-dark'>{item.description}</h3>
          </div>
        </div>
        <p>N{item.price}</p>
        <div className='flex gap-4 items-center'>
          <button
            className='h-6 w-6 border border-dark disabled:cursor-not-allowed'
            onClick={handleDecreaseItem}
            disabled={item.quantity === 1}
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button
            className='h-6 w-6 border border-dark'
            onClick={handleIncreaseItem}
          >
            +
          </button>
        </div>
        <p>N{formatNumber(item.totalPrice)}</p>
        <button className='ml-auto' onClick={handleDeleteItem}>
          <RiDeleteBin5Line className='text-xl' />
        </button>
      </article>
    </div>
  );
}
export default SingleCartItem;
