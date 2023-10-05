interface BottomBorderProps {
  open: boolean;
}

export const BottomBorder: React.FC<BottomBorderProps> = (props) => {
  const { open } = props;

  return (
    <div
      className={`${open && 'hidden'} h-1 bg-white-60-opacity rounded-b`}
    ></div>
  );
};
