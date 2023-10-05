'use client';
import { Disclosure } from '@headlessui/react';
import { ContactInfo } from './contactInfo';
import { Close, Menu } from '../icons';
import { BottomBorder } from './bottomBorder';
import { Logo } from './logo';
import { Links } from './links';

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
            <Close className='w-5 h-5' />
          </Disclosure.Button>

          <div
            className={`flex ${
              open ? 'flex-col gap-10' : 'items-center justify-between'
            }  w-full m-auto h-full`}
          >
            <Logo />

            <Disclosure.Button
              className={`md:hidden ${open ? 'hidden' : 'block'}`}
            >
              <Menu className='w-8 h-8' />
            </Disclosure.Button>

            <div
              className={`${
                open ? 'flex flex-col' : 'hidden'
              } md:flex md:items-center md:justify-end w-full`}
            >
              <Links />
              <ContactInfo />
            </div>
          </div>

          <BottomBorder open={open} />
        </nav>
      )}
    </Disclosure>
  );
};
