import Title from '../ui/Title';
import products from './prod';

function TechGadgets() {
  console.log(products);
  return (
    <div className='max-w-6xl mx-auto'>
      <Title title={'tech gadgets'} />
    </div>
  );
}

export default TechGadgets;
