const Subinput = ({ onChangeHandler }: { onChangeHandler: () => void }) => {
  return (
    <>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(e.target.value);
        }}
      />
    </>
  );
};

export default Subinput;
