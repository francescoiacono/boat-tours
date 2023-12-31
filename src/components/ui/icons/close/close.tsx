interface Props {
  className?: string;
}

export const Close: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <svg
      className={className}
      width='148'
      height='148'
      viewBox='0 0 148 148'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 137.279L137.279 10M137.279 137.279L10 10'
        stroke='white'
        strokeWidth='20'
        strokeLinecap='round'
      />
    </svg>
  );
};
