'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const Location = () => {
  const t = useTranslations('Location');

  return (
    <section className='flex items-end h-screen bg-map-pattern bg-cover bg-top md:bg-left bg-primary-color bg-blend-screen'>
      <div className='text-white bg-primary-color w-full md:max-w-lg md:h-full md:ml-40 flex flex-col justify-center p-10 md:pt-[250px]'>
        <h1 className='text-3xl uppercase'>{t('title')}</h1>
        <div>
          <p className='text-white-60-opacity'>{t('address')}</p>
          <ul className='list-disc flex flex-col gap-4'>
            <li className='mt-4 ml-16'>
              <Link
                className='underline text-ellipsis overflow-hidden block'
                href='https://w3w.co/preferences.forestry.reimpose'
              >
                https://w3w.co/preferences.forestry.reimpose
              </Link>
            </li>
            <li className='ml-16'>{t('instructions')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
