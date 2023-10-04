import Image from 'next/image';

export const Navbar = () => {
  return (
    <header className='w-full h-navbar z-10 absolute'>
      <nav className='bg-gradient-to-b from-black to-transparent w-full h-full text-white px-10'>
        <div className='flex items-center justify-between w-full m-auto h-full'>
          <div className='font-medium flex gap-2 items-center'>
            <div className='w-16 h-16 rounded-full border-2 text-white-60-opacity border-white-60-opacity flex justify-center items-center'>
              Logo
            </div>
            <span className='text-3xl font-bold'>
              Boat <br /> Tours
            </span>
          </div>

          <ul className='flex justify-evenly flex-auto uppercase'>
            <li>
              <a href='#'>Cruises</a>
            </li>
            <li>
              <a href='#'>How to find us</a>
            </li>
            <li>
              <a href='#'>Accomodation</a>
            </li>
            <li>
              <a href='#'>Cafe</a>
            </li>
          </ul>

          <div className='flex gap-10 border-2 border-white-60-opacity px-5 py-2 rounded justify-center'>
            <button className='flex-grow'>+44 192033894</button>
            <div className='w-[2px] bg-white-60-opacity'></div>
            <button className='flex-grow'>English</button>
          </div>
        </div>
        <div className='h-1 bg-white-60-opacity rounded-b'></div>
      </nav>
    </header>
  );
};
