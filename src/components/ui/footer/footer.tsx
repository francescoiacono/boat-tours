'use client';

import { useFormatter, useTranslations } from 'next-intl';
import { Logo } from '../navbar/logo';
import { FooterList } from './footerList/footerList';
import { contactLinks, usefulLinks, socialLinks } from '@/data';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  const t = useTranslations('Footer');
  const formatter = useFormatter();

  return (
    <div className='bg-primary-color border-t border-white-60-opacity px-2 pt-10 md:px-10 text-white w-full '>
      <div className='flex items-start w-full md:w-9/12 m-auto'>
        <Logo />
        <div className='flex flex-auto justify-around'>
          <FooterList listName={t('section1.title')} links={usefulLinks} />
          <FooterList listName={t('section2.title')} links={socialLinks} />
          <div className='flex flex-col gap-2'>
            <FooterList listName={t('section3.title')} links={contactLinks} />
            <div className='flex flex-col gap-2'>
              <p className='text-xs uppercase font-bold'>Code</p>
              <Link href='https://github.com/francescoiacono/boat-tours'>
                <Image
                  src='/assets/images/ui/icons/github-mark.svg'
                  width={30}
                  height={30}
                  alt='github'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className='text-xs text-center pt-8 pb-2'>
          {t('copyright.message', { year: new Date() })}
        </p>
      </div>
    </div>
  );
};
