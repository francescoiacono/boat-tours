interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <button
      {...rest}
      aria-label={children?.toString()}
      className={`${className} bg-primary-color text-white uppercase px-10 py-3 rounded-md font-semibold text-xl hover:bg-green-700 hover:scale-105 hover:shadow-md transition-all active:bg-green-800`}
    >
      {children}
    </button>
  );
};
