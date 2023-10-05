interface LinksProps {
  whiteUnderline?: boolean;
}

export const Links: React.FC<LinksProps> = (props) => {
  const { whiteUnderline } = props;

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
          Cruises
        </a>
      </li>
      <li>
        <a
          className={`${
            whiteUnderline ? 'hover:border-primary-color' : 'hover:border-white'
          } border-transparent transition-all hover:border-b-4`}
          href='#'
        >
          How to find us
        </a>
      </li>
      <li>
        <a
          className={`${
            whiteUnderline ? 'hover:border-primary-color' : 'hover:border-white'
          } border-transparent transition-all hover:border-b-4`}
          href='#'
        >
          Accomodation
        </a>
      </li>
      <li>
        <a
          className={`${
            whiteUnderline ? 'hover:border-primary-color' : 'hover:border-white'
          } border-transparent transition-all hover:border-b-4`}
          href='#'
        >
          Cafe
        </a>
      </li>
    </ul>
  );
};
