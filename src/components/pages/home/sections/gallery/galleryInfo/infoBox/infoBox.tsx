'use client';

import { PrimaryButton } from '@/components/ui';
import { useTranslations } from 'next-intl';

export const InfoBox = () => {
  const t = useTranslations('Gallery');

  return (
    <div className='h-full flex flex-col items-center justify-center gap-10 my-10 md:m-0'>
      <h1 className='text-5xl uppercase text-primary-color'>
        {t('infoBox.title')}
      </h1>
      <p className='text-xl text-center'>{t('infoBox.description')}</p>
      <PrimaryButton className='text-2xl'>{t('infoBox.button')}</PrimaryButton>
    </div>
  );
};
