import { useRef, useState } from 'react';
import card from '../assets/images/card.svg';
import blackcard from '../assets/images/blackcard.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearCart } from '../cart/cartSlice';
import { FaArrowLeftLong } from 'react-icons/fa6';

function Payment({
  setIsSuccessful,
  isHidden,
  onHandleIsMobile,
  isMobilePayment,
}) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const expiryDateRef = useRef(null);
  const cvvRef = useRef(null);

  const formatCardNumber = (value) => {
    return value
      .replace(/\s?/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 16) {
      setCardNumber(formatCardNumber(value));
      if (value.length === 16) {
        expiryDateRef.current.focus();
      }
    }
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 4) {
      const formattedValue =
        value.length >= 3 ? `${value.slice(0, 2)}/${value.slice(2, 4)}` : value;
      setExpiryDate(formattedValue);
      if (value.length === 4) {
        cvvRef.current.focus();
      }
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length < 1) {
      toast.error('You have no item in your cart');
      return;
    }

    if (
      cardNumber.replace(/\s/g, '').length === 16 &&
      expiryDate.length === 5 &&
      cvv.length === 3
    ) {
      if (isMobilePayment) {
        onHandleIsMobile();
      }
      dispatch(clearCart());
      setIsSuccessful(true);
    } else {
      toast.error('please dummy card details');
    }
  };
  return (
    <div
      className={`${
        isHidden === true ? 'hidden bg-dark text-light' : 'bg-white'
      } bg-dark md:flex md:flex-col rounded p-8 space-y-6`}
    >
      {' '}
      <div className='flex gap-4 items-center'>
        {isHidden ? (
          ''
        ) : (
          <button onClick={onHandleIsMobile}>
            <FaArrowLeftLong />
          </button>
        )}

        <h4 className='text-xl'>Payment</h4>
      </div>
      <img
        src={`${isHidden ? card : blackcard}`}
        alt='card'
        className='w-full max-w-lg'
      />
      <form className='space-y-6' onSubmit={handleSubmit}>
        <div className='capitalize flex flex-col gap-2'>
          <label htmlFor=''>card number</label>
          <input
            type='text'
            placeholder='0000 0000 0000 0000'
            className='p-2 bg-transparent rounded border border-light-gray'
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength='19'
          />
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <div className='capitalize flex flex-col gap-2'>
            <label htmlFor=''>expiration date</label>
            <input
              type='text'
              placeholder='MM/YY'
              className='p-2 bg-transparent rounded-md border border-light-gray'
              value={expiryDate}
              onChange={handleExpiryDateChange}
              maxLength='5'
              ref={expiryDateRef}
            />
          </div>
          <div className='capitalize flex flex-col gap-2'>
            <label htmlFor=''>expiration date</label>
            <input
              type='text'
              placeholder='123'
              className='p-2 bg-transparent rounded-md border border-light-gray'
              value={cvv}
              onChange={handleCvvChange}
              maxLength='3'
              ref={cvvRef}
            />
          </div>
        </div>
        <button
          className='py-4 rounded-md capitalize text-xs bg-reddish px-4'
          type='submit'
        >
          make payment
        </button>
      </form>
    </div>
  );
}
export default Payment;
