import { PrimaryButton } from '@/components/ui';

interface TourDatesCTAProps {
  description?: string;
  buttonText?: string;
}

export const TourDatesCTA: React.FC<TourDatesCTAProps> = ({
  description = `Join us on a magical voyage across Ischia’s crystal-clear waters to
  unearth hidden coves, enchanting grottoes, and tranquil thermal springs.
  Immerse yourself in breathtaking panoramas, dive into azure depths, or
  simply bask under the romantic Ischian sunset.`,
  buttonText = 'Check the dates',
}) => {
  return (
    <section className='flex flex-col items-center w-7/12 m-auto py-20 gap-10'>
      <p className='text-lg text-center' tabIndex={0}>
        {description}
      </p>
      <PrimaryButton className='md:w-1/2'>{buttonText}</PrimaryButton>
    </section>
  );
};
