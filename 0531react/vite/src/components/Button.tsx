import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames/bind";

// type TButtonProps = {
//   type: "submit" | "reset" | "button";
//   disabled: true | false;
//   name: string;
//   msg: string;
//   children: React.ReactNode;
// };

type TButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
};

const Button = (props: TButtonProps) => {
  const { children, ...restButtonProps } = props;
  console.log(restButtonProps);
  const cx = classNames.bind(styles);
  return (
    <>
      <form action="">
        <button className={cx("btn")} {...restButtonProps}>
          {children}
        </button>
      </form>
    </>
  );
};

export default Button;
