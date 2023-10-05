import { Logo } from '../navbar/logo';

export const Footer = () => {
  return (
    <div className='bg-primary-color border-t border-white-60-opacity p-10 px-10 text-white flex w-full justify-between'>
      <Logo />
      <div className='flex flex-auto justify-around'>
        <ul className='flex flex-col gap-1'>
          <label className='uppercase font-bold'>Links</label>
          <li>
            <a className='hover:underline' href='#'>
              Test
            </a>
          </li>
          <li>
            <a className='hover:underline' href='#'>
              Test
            </a>
          </li>
          <li>
            <a className='hover:underline' href='#'>
              Test
            </a>
          </li>
          <li>
            <a className='hover:underline' href='#'>
              Test
            </a>
          </li>
        </ul>

        <ul className='flex flex-col gap-1'>
          <label className='uppercase font-bold'>Social</label>
          <li>
            <a className='hover:underline' href='#'>
              Test
            </a>
          </li>
          <li>
            <a className='hover:underline' href='#'>
              Test
            </a>
          </li>
          <li>
            <a className='hover:underline' href='#'>
              Test
            </a>
          </li>
          <li>
            <a className='hover:underline' href='#'>
              Test
            </a>
          </li>
        </ul>

        <ul className='flex flex-col gap-1'>
          <label className='uppercase font-bold'>Contact</label>
          <li>
            <a className='hover:underline' href='#'>
              Test
            </a>
          </li>
          <li>
            <a className='hover:underline' href='#'>
              Test
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
