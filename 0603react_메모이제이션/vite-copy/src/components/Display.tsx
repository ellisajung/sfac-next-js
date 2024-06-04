import React from "react";

const Display = ({ count }: { count: number }) => {
  console.log("display rendered");
  return (
    <>
      <h1>count: {count}</h1>
    </>
  );
};

export default React.memo(Display);
