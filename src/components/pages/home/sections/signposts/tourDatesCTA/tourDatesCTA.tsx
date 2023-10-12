import { PrimaryButton } from '@/components/ui';
import { useTranslations } from 'next-intl';

export const TourDatesCTA = () => {
  const t = useTranslations('TourDatesCTA');

  const description = t('description');
  const buttonText = t('button');

  return (
    <section className='flex flex-col items-center w-7/12 m-auto py-20 gap-10'>
      <p className='text-lg text-center' tabIndex={0}>
        {description}
      </p>
      <PrimaryButton className='md:w-1/2'>{buttonText}</PrimaryButton>
    </section>
  );
};
