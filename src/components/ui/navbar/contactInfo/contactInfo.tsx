import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

export const ContactInfo = () => {
  return (
    <div className='mt-10 md:m-0 flex gap-10 border-2 border-white-60-opacity px-5 py-2 rounded justify-center'>
      <button className='flex-none w-30 text-center'>+44 192033894</button>
      <div className='w-[2px] bg-white-60-opacity'></div>
      <Menu as='div' className='relative inline-block text-left flex-none w-32'>
        <Menu.Button className='w-full text-center transition-colors duration-200 focus:outline-none focus:ring'>
          English
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
            <div className='py-1'>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                    href='#'
                  >
                    English
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                    href='#'
                  >
                    Italian
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
