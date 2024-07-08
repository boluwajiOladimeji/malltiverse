import Title from '../ui/Title';
import products from './prod';

import SingleProduct from './SingleProduct';

function SectionItems({ category, title }) {
  const displayedProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className='max-w-6xl mx-auto py-4'>
      <Title title={title} />
      <div className='grid grid-cols-2 md:grid-cols-3 md:gap-8 gap-4'>
        {displayedProducts.map((product) => {
          return (
            <SingleProduct product={product} key={product.id} />
            // <article className='space-y-4' key={product.id}>
            //   <div className='bg-light-gray flex justify-center py-12  h-48 border border-transparent hover:border-reddish relative'>
            //     <img
            //       src={product.img}
            //       alt={product.title}
            //       className='w-3/5 lg:w-full h-full'
            //     />
            //     <div className='h-8 w-8 rounded-full flex border border-dark items-center justify-center absolute top-4 right-4'>
            //       {/* <img src={heart} alt='heart' /> */}
            //       {product.favorite ? (
            //         <FaHeart className='text-reddish' />
            //       ) : (
            //         <CiHeart className='text-dark text-xl' />
            //       )}
            //     </div>
            //   </div>
            //   <div className=''>
            //     <div className='space-y-1'>
            //       <h2 className='font-semibold text-xs lg:text-lg'>
            //         {product.name}
            //       </h2>
            //       <h3 className='text-xs lg:text-sm min-h-9'>
            //         {product.description}
            //       </h3>
            //       <div className='flex gap-1'>
            //         {Array.from({ length: 5 }, (_, index) => {
            //           return index + 1 <= product.rating ? (
            //             <FaStar className='text-yello' key={index} />
            //           ) : (
            //             <FaRegStar className='text-yello' key={index} />
            //           );
            //         })}
            //       </div>
            //     </div>
            //     <p className='text-reddish mt-2'>
            //       {formatNumber(product.price)}
            //     </p>
            //   </div>
            //   <button
            //     className='py-2 px-4 rounded-xl hover:bg-reddish border border-reddish text-xs'
            //     onClick={() => handleAddItem(product.id)}
            //   >
            //     Add to Cart
            //   </button>
            // </article>
          );
        })}
      </div>
    </div>
  );
}
export default SectionItems;
