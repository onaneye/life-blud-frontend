

const Navbar = () => {
  return (
    <div className='container px-4 mx-4 items-center py-5 my-0 flex justify-between absolute'>
      <img src="/logo.png" alt="Logo" width={100} height={50} />
      <button className='hidden lg:block button-primary-sm'>Login</button>
    </div>
  );
};

export default Navbar;