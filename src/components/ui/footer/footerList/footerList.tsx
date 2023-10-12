import { Links } from '@/data';
import Link from 'next/link';

interface FooterListProps {
  listName: string;
  links: Links[];
}

export const FooterList: React.FC<FooterListProps> = (props) => {
  const { listName, links } = props;

  return (
    <ul className='flex flex-col gap-1'>
      <label className='uppercase font-bold text-xs'>{listName}</label>
      {links.map((link, i) => (
        <li key={i}>
          <Link className='hover:underline text-sm' href={link.link}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
