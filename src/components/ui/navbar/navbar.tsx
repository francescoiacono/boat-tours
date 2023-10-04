'use client';
import { Disclosure } from '@headlessui/react';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <Disclosure as='header' className='w-full h-navbar z-10 absolute'>
      {({ open }) => (
        <nav
          className={`${
            open
              ? 'fixed bg-red-600 h-screen flex flex-col items-start'
              : 'bg-gradient-to-b from-black to-transparent'
          } w-full h-full text-white px-10`}
        >
          <Disclosure.Button
            className={`md:hidden ${open ? 'block my-10' : 'hidden'}`}
          >
            <Image
              src='/assets/images/ui/icons/close.svg'
              width={20}
              height={20}
              alt='menu icon'
            />
          </Disclosure.Button>

          <div
            className={`flex ${
              open ? 'flex-col gap-5' : 'items-center justify-between'
            }  w-full m-auto h-full`}
          >
            <div className='font-medium flex gap-2 items-center'>
              <div className='w-16 h-16 rounded-full border-2 text-white-60-opacity border-white-60-opacity flex justify-center items-center'>
                Logo
              </div>
              <span className='text-3xl font-bold'>
                Boat <br /> Tours
              </span>
            </div>

            <Disclosure.Button
              className={`md:hidden ${open ? 'hidden' : 'block'}`}
            >
              <Image
                src='/assets/images/ui/icons/hamburger.svg'
                width={30}
                height={30}
                alt='menu icon'
              />
            </Disclosure.Button>

            <div
              className={`${
                open ? 'flex flex-col' : 'hidden'
              } md:flex md:items-center md:justify-end w-full`}
            >
              <ul
                className={`flex flex-col gap-2 md:flex-row justify-evenly flex-auto uppercase`}
              >
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

              <div className='mt-2 md:m-0 flex gap-10 border-2 border-white-60-opacity px-5 py-2 rounded justify-center'>
                <button className='flex-grow'>+44 192033894</button>
                <div className='w-[2px] bg-white-60-opacity'></div>
                <button className='flex-grow'>English</button>
              </div>
            </div>
          </div>

          <div
            className={`${open && 'hidden'} h-1 bg-white-60-opacity rounded-b`}
          ></div>
        </nav>
      )}
    </Disclosure>
  );
};
