import { ArrowRight } from '@/components/ui/icons';
import { Cruise } from '@/data';
import Link from 'next/link';

interface TextContentProps {
  cruise: Cruise;
  hovering: boolean;
}

export const TextContent: React.FC<TextContentProps> = (props) => {
  const { cruise, hovering } = props;

  return (
    <div className='flex flex-col gap-10'>
      <p>{cruise.description}</p>
      <Link
        href={cruise.link}
        className='font-bold uppercase text-sm flex justify-center gap-2 items-center'
        aria-label={`Read more about ${cruise.name}`}
      >
        Read More
        <ArrowRight className='w-5 h-5 transition-all' white={hovering} />
      </Link>
    </div>
  );
};
