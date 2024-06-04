const Title = ({ title, subtitle }) => {
  return (
    <div className="">
      <div style={{"width":132, "height":28, 'fontFamily':inter, 'fontSize': }}>{title}</div>
      <div >{subtitle}</div>
    </div>
  );
};

export default Title;
