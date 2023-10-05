'use client';
import { Disclosure } from '@headlessui/react';
import { ContactInfo } from './contactInfo';
import { Close, Menu } from '../icons';
import { BottomBorder } from './bottomBorder';
import { Logo } from './logo';
import { Links } from './links';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };

    handleScroll();

    addEventListener('scroll', handleScroll);

    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as='header'
      className={`${
        scrollHeight > 0 ? 'fixed h-24 shadow-md' : 'h-navbar absolute'
      } w-full  z-10 transition-all`}
    >
      {({ open }) => (
        <nav
          className={`${
            open
              ? 'fixed bg-red-600 flex flex-col items-start'
              : `${
                  scrollHeight > 0
                    ? 'bg-red-600'
                    : 'bg-gradient-to-b from-black to-transparent'
                } transition-all duration-500`
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

          <BottomBorder open={scrollHeight > 0 || open} />
        </nav>
      )}
    </Disclosure>
  );
};
