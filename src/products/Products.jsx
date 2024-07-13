import Hero from './Hero';
import SectionItems from './SectionItems';
import Footer from './Footer';

// import headerBg from '../assets/images/headphonesBg.svg';

function Products() {
  return (
    <>
      <div className='px-4'>
        <Hero />
        <SectionItems category={'tech'} title={'tech gadgets'} />
        <SectionItems category={'men'} title={'men fashion'} />
        <SectionItems category={'women'} title={'women fashion'} />
      </div>
      <Footer />
    </>
  );
}

export default Products;
