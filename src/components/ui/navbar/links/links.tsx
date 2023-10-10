'use client';

import { useTranslations } from 'next-intl';

interface LinksProps {
  whiteUnderline?: boolean;
}

export const Links: React.FC<LinksProps> = (props) => {
  const { whiteUnderline } = props;

  const t = useTranslations('NavLinks');

  return (
    <ul
      className={`flex flex-col gap-2 md:flex-row justify-evenly flex-auto uppercase`}
    >
      <li>
        <a
          className={`${
            whiteUnderline ? 'hover:border-primary-color' : 'hover:border-white'
          } border-transparent transition-all hover:border-b-4`}
          href='#'
        >
          {t('link1')}
        </a>
      </li>
      <li>
        <a
          className={`${
            whiteUnderline ? 'hover:border-primary-color' : 'hover:border-white'
          } border-transparent transition-all hover:border-b-4`}
          href='#'
        >
          {t('link2')}
        </a>
      </li>
      <li>
        <a
          className={`${
            whiteUnderline ? 'hover:border-primary-color' : 'hover:border-white'
          } border-transparent transition-all hover:border-b-4`}
          href='#'
        >
          {t('link3')}
        </a>
      </li>
      <li>
        <a
          className={`${
            whiteUnderline ? 'hover:border-primary-color' : 'hover:border-white'
          } border-transparent transition-all hover:border-b-4`}
          href='#'
        >
          {t('link4')}
        </a>
      </li>
    </ul>
  );
};
