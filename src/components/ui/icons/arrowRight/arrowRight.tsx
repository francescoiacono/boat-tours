interface Props {
  className?: string;
  white?: boolean;
}

export const ArrowRight: React.FC<Props> = (props) => {
  return (
    <svg
      className={props.className}
      width='44'
      height='29'
      viewBox='0 0 44 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M24 27L41.7302 15.3354C42.3307 14.9403 42.3307 14.0597 41.7302 13.6646L24 2'
        stroke={props.white ? 'white' : 'black'}
        stroke-width='3'
        stroke-linecap='round'
      />
      <path
        d='M2 13C1.17157 13 0.5 13.6716 0.5 14.5C0.5 15.3284 1.17157 16 2 16L2 13ZM42 13L2 13L2 16L42 16L42 13Z'
        fill={props.white ? 'white' : 'black'}
      />
    </svg>
  );
};
