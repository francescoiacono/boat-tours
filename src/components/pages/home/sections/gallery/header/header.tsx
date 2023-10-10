'use client';

import { Camera } from '@/components/ui/icons';
import { useTranslations } from 'next-intl';

export const Header = () => {
  const t = useTranslations('Gallery');

  return (
    <div className='flex flex-col gap-5 mt-20 mb-10'>
      <Camera className='w-16 h-16 -rotate-12 opacity-80' />
      <h1 className='font-extralight text-3xl uppercase'>
        {t('header.part1')} <br />{' '}
        <span className='text-7xl font-semibold'>{t('header.location')}</span>
      </h1>
    </div>
  );
};
