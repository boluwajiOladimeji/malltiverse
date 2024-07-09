import { useSelector } from 'react-redux';
// import Confetti from 'react-confetti';
import Payment from './Payment';
import { useEffect, useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

function Checkout() {
  const { cart } = useSelector((store) => store.cart);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isMobilePayment, setIsMobilePayment] = useState(false);

  const handleIsMobile = () => {
    setIsMobilePayment(false);
  };

  const submitToMobilePayment = (e) => {
    e.preventDefault();
    setIsMobilePayment(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobilePayment) {
        setIsMobilePayment(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobilePayment]);

  if (isMobilePayment) {
    return (
      <div>
        <div className='mx-auto max-w-6xl'>
          <Payment
            setIsSuccessful={setIsSuccessful}
            onHandleIsMobile={handleIsMobile}
            isMobilePayment={isMobilePayment}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {isSuccessful ? (
        <div className='confetti text-center min-h-[calc(100vh-64px)] py-8 grid'>
          <h3 className='text-xl font-bold'>Payment Successful</h3>
          <div className=''>
            <div className='h-20 w-20 grid mx-auto place-items-center bg-reddish rounded-full mb-4 '>
              <IoMdCheckmark className='text-light text-4xl font-bold' />
            </div>
            <h3 className='font-semibold text-slate-400 '>
              Payment Successful
            </h3>
            <h4 className='text-xs text-slate-400'>
              Thank you for your purchase
            </h4>
          </div>
        </div>
      ) : (
        <div className='p-4'>
          <div className='mx-auto max-w-6xl relative'>
            <div className='flex justify-between items-center'>
              <h2 className='capitalize text-2xl md:text-3xl font-bold'>
                Checkout
              </h2>
              <p>
                {cart.length} {cart.length > 1 ? 'Items' : 'Item'}
              </p>
            </div>
            {/* Form & Payment */}
            <div className='py-4 md:grid md:grid-cols-2 md:gap-10'>
              <form
                className='space-y-6 border border-dark rounded p-8'
                onSubmit={submitToMobilePayment}
              >
                <h3>
                  Select how to receive your package
                  {cart.length === 1 ? '' : 's'}
                </h3>
                <div className='form-control space-y-2'>
                  <h4 className='text-sm font-semibold'>Pickup</h4>
                  <div className='text-xs flex items-center gap-2 text-gray-600'>
                    <input
                      type='radio'
                      name='location'
                      id='secretariat'
                      required
                    />
                    <label htmlFor='secretariat'>
                      Old Secretariat Complex Area 1,Garki Area 1 AMAC
                    </label>
                  </div>
                  <div className='text-xs flex items-center gap-2 text-gray-600'>
                    <input
                      type='radio'
                      name='location'
                      id='secretariat'
                      className='ring-reddish'
                      required
                    />
                    <label htmlFor='secretariat'>
                      Sokoto street Area 1,Garki Area 1 AMAC
                    </label>
                  </div>
                </div>
                <div className='space-y-2'>
                  <h4 className='text-sm font-semibold'>Delivery</h4>
                  <textarea
                    name='delivery'
                    id='delivery'
                    className='w-full min-h-12 border p-2 border-dark rounded'
                  ></textarea>
                </div>
                <div className='space-y-2'>
                  <h4 className='text-sm font-semibold'>Contact</h4>
                  <div className='space-y-4 flex flex-col w-3/5'>
                    <input
                      type='tel'
                      className='border border-dark rounded p-2'
                      placeholder='phone nos1'
                    />
                    <input
                      type='tel'
                      className='border border-dark rounded p-2'
                      placeholder='phone nos1'
                    />
                  </div>
                </div>
                <button
                  className='py-4 rounded-md capitalize w-4/6 text-xs bg-reddish px-4 md:hidden'
                  type='submit'
                >
                  Next
                </button>
              </form>
              {/* Payment */}
              <Payment setIsSuccessful={setIsSuccessful} isHidden={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Checkout;
