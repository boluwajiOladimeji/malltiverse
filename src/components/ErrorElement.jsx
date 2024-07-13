import { Link, useRouteError } from 'react-router-dom';
import Nav from './Nav';

function ErrorElement() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <div className='min-h-[calc(100vh-64px)]  grid place-items-center'>
        <div className='text-center space-y-6'>
          <p className='text-6xl text-center'>😥</p>
          <p className='text-3xl'>Seems something went wrong</p>
          <p className='flex items-center justify-center gap-2 text-reddish'>
            <span> 👉</span>
            <Link to={'/'}>Continue Shopping</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default ErrorElement;
