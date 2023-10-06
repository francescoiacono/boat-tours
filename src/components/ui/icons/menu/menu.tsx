interface Props {
  className?: string;
}

export const Menu: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <svg
      className={className}
      width='200'
      height='160'
      viewBox='0 0 200 160'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 10H190M10 80H190M10 150H190'
        stroke='white'
        strokeWidth='20'
        strokeLinecap='round'
      />
    </svg>
  );
};
