type TInputProps = React.ComponentProps<"input">;
const Input = (props: TInputProps) => {
  const { ...restProps } = props;
  return (
    <>
      <input
        {...restProps}
        className="w-[325px] h-11 border border-[#4f4f4f] rounded-lg py-[13.5px] px-4 text-sm placeholder:text-[#acacac]"
      />
    </>
  );
};

export default Input;
