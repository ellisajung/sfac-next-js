import { useEffect, useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
    console.log("useEffect called");

    return () => {
      console.log("cleanup function called");
    };
  }, []);
  return (
    <>
      <h1>app component</h1>
      {showNavbar && <Navbar />}
      <button
        onClick={() => {
          setShowNavbar(!showNavbar);
        }}
      ></button>
    </>
  );
};

export default Navbar;
