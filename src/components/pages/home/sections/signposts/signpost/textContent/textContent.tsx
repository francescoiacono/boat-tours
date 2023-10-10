import { ArrowRight } from '@/components/ui/icons';
import { Cruise } from '@/data';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface TextContentProps {
  cruise: Cruise;
  hovering: boolean;
}

export const TextContent: React.FC<TextContentProps> = (props) => {
  const { cruise, hovering } = props;

  const t = useTranslations('Cruises');

  // Retrieve translations

  const cruiseName = t(`cruise${cruise.id}.name`);
  const cruiseDescription = t(`cruise${cruise.id}.description`);

  return (
    <div className='flex flex-col gap-10'>
      <div>
        <h1 className='text-2xl uppercase text-center font-bold'>
          {cruiseName}
        </h1>
        <h2
          className={`${
            hovering ? 'text-white' : 'text-gray-500'
          } text-center font-thin`}
        >
          From £{cruise.price}
        </h2>
      </div>

      <div className='flex flex-col gap-10 justify-end'>
        <p>{cruiseDescription}</p>
        <Link
          href={cruise.link}
          className={`font-bold uppercase text-sm flex justify-center gap-2 items-center ${
            hovering && 'animate-bounce'
          }`}
          aria-label={`Read more about ${cruiseName}`}
        >
          Read More
          <ArrowRight className='w-5 h-5 transition-all ' white={hovering} />
        </Link>
      </div>
    </div>
  );
};
