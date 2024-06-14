const Navbar = () => {
  return (
    <div className='flex justify-between w-full px-4 mr-4 items-center py-5 my-0   absolute'>
      <img src="/logo.png" alt="Logo" width={100} height={50} />
      <button className='hidden lg:block button-primary-sm'>Login</button>
    </div>
  );
};

export default Navbar;
