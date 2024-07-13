import Title from '../ui/Title';

import SingleProduct from './SingleProduct';
import { useOutletContext } from 'react-router-dom';

function SectionItems({ category, title }) {
  const products = useOutletContext();

  const displayedProducts = products.filter(
    (product) => product.category === category
  );

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
