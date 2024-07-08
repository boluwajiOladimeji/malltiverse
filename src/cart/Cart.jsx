import { useSelector } from 'react-redux';
import SingleCartItem from './SingleCartItem';
import {
  calculateDiscount,
  calculateTotal,
  formatNumber,
  fullTotal,
} from '../utils/helpers';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart } = useSelector((store) => store.cart);

  return (
    <div className='min-h-[calc(100vh-64px)] md:pb-8  flex flex-col'>
      <div className='p-4 '>
        <div className='mx-auto max-w-6xl space-y-6'>
          <div className='flex justify-between items-center'>
            <h2 className='capitalize text-2xl md:text-3xl font-bold'>
              My shopping cart
            </h2>
            <p>
              {cart.length} {cart.length > 1 ? 'Items' : 'Item'}
            </p>
          </div>
          <section>
            <header className='hidden md:grid grid-cols-7 capitalize gap-4 mb-6'>
              <p className='col-span-3'>products</p>
              <p>price</p>
              <p>quantity</p>
              <p>total</p>
            </header>
            {cart.length < 1 ? (
              <h2 className='text-center font-semibold text-2xl mt-48'>
                No Item in Cart
              </h2>
            ) : (
              <div className='space-y-6 py-6'>
                {cart.map((item) => {
                  return <SingleCartItem key={item.id} item={item} />;
                })}
              </div>
            )}
          </section>
        </div>
      </div>
      {cart.length >= 1 && (
        <div className='bg-dark px-8 py-8 space-y-8 w-full md:max-w-6xl md:mx-auto md:rounded  text-light-gray flex-1 text-sm'>
          <h3 className='font-bold mb-5 md:text-base'>Shopping Summary</h3>
          <div className='md:grid md:grid-cols-2 md:gap-16'>
            <div className='space-y-2 mb-6'>
              <p className='text-xs md:text-sm'>Discount Code</p>
              <div className='flex gap-6 justify-between'>
                <input
                  type='text'
                  className='border py-3 px-1 border-light bg-transparent rounded-md'
                />
                <button className=' text-xs px-6 rounded-md capitalize bg-reddish'>
                  apply
                </button>
              </div>
            </div>
            <div className='text-xs space-y-6 capitalize'>
              <p className='flex justify-between'>
                <span>sub-total</span>{' '}
                <span>{formatNumber(calculateTotal(cart))}</span>
              </p>
              <p className='flex justify-between'>
                <span>delivery fee</span> <span>N1500</span>
              </p>
              <p className='flex justify-between'>
                <span>discount amount</span>{' '}
                <span>{formatNumber(calculateDiscount(cart))}</span>
              </p>
              <hr />
              <p className='flex justify-between'>
                <span className='text-base'>total amount</span>{' '}
                <span className='text-lg font-semibold'>
                  {formatNumber(fullTotal(cart))}
                </span>
              </p>
              <Link
                to={'/checkout'}
                className='py-4 block text-center rounded bg-reddish'
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
