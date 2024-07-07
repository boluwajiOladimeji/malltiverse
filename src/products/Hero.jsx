function Hero() {
  return (
    <div className='h-[calc(100vh-64px)] py-4'>
      <div className=' headerbg h-full bg-center mx-auto max-w-6xl bg-cover bg-no-repeat rounded-md grid items-center '>
        <article className='text-light px-6 space-y-4'>
          <h1 className='text-4xl font-semibold '>
            Premium sound, Premium saving
          </h1>
          <h2>Limited offer , hope you get yours now</h2>
          <button className='rounded-full capitalize px-6 py-2 bg-light-gray/35'>
            buy now
          </button>
        </article>
      </div>
    </div>
  );
}

export default Hero;
