function Title({ title }) {
  return (
    <div className='flex gap-4 items-center capitalize font-semibold text-3xl py-6'>
      <div className='w-1 h-10 bg-reddish rounded'></div>
      <p>{title}</p>
    </div>
  );
}

export default Title;
