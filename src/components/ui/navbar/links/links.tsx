export const Links = () => {
  return (
    <ul
      className={`flex flex-col gap-2 md:flex-row justify-evenly flex-auto uppercase`}
    >
      <li>
        <a
          className=' border-transparent transition-all hover:border-b-4 hover:border-red-500'
          href='#'
        >
          Cruises
        </a>
      </li>
      <li>
        <a
          className=' border-transparent transition-all hover:border-b-4 hover:border-red-500'
          href='#'
        >
          How to find us
        </a>
      </li>
      <li>
        <a
          className=' border-transparent transition-all hover:border-b-4 hover:border-red-500'
          href='#'
        >
          Accomodation
        </a>
      </li>
      <li>
        <a
          className=' border-transparent transition-all hover:border-b-4 hover:border-red-500'
          href='#'
        >
          Cafe
        </a>
      </li>
    </ul>
  );
};
