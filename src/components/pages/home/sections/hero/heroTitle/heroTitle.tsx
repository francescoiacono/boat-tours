'use client';

import { PrimaryButton } from '@/components/ui';
import { useTranslations } from 'next-intl';

export const HeroTitle = () => {
  const t = useTranslations('HeroTitle');

  return (
    <div className='uppercase px-3 md:p-0 text-6xl md:text-7xl text-center font-bold mb-5'>
      <h1>
        {t('part1')} <br />
        {t('part2')} <br />
        {t('part3')} <span className='text-primary-color'>{t('location')}</span>{' '}
        {t('part4')}
      </h1>

      <div className='mt-4'>
        <PrimaryButton className='text-2xl'>{t('button')}</PrimaryButton>
      </div>
    </div>
  );
};
