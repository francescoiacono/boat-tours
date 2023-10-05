interface Props {
  className?: string;
}

export const Camera: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <svg
      className={className}
      width='253'
      height='182'
      viewBox='0 0 253 182'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M218 70C218 72.7614 215.761 75 213 75C210.239 75 208 72.7614 208 70C208 67.2386 210.239 65 213 65C215.761 65 218 67.2386 218 70Z'
        stroke='black'
        stroke-width='10'
      />
      <path
        d='M177 109C177 136.614 154.614 159 127 159C99.3858 159 77 136.614 77 109C77 81.3858 99.3858 59 127 59C154.614 59 177 81.3858 177 109Z'
        stroke='black'
        stroke-width='10'
      />
      <path
        d='M187.465 10.4855C187.752 7.54616 185.442 5 182.488 5H71.5115C68.5583 5 66.2484 7.54616 66.5352 10.4855L69.4648 40.5145C69.7516 43.4538 67.4417 46 64.4885 46H10C7.23858 46 5 48.2386 5 51V172C5 174.761 7.23857 177 10 177H243C245.761 177 248 174.761 248 172V51C248 48.2386 245.761 46 243 46H189.512C186.558 46 184.248 43.4538 184.535 40.5145L187.465 10.4855Z'
        stroke='black'
        stroke-width='10'
      />
    </svg>
  );
};
