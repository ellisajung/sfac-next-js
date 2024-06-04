import { useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import Input from "./html/Input";

const Login = () => {
  const [action, setAction] = useState<"Login" | "Sign">("Sign");

  const [name, setName] = useState("");
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const [email, setEmail] = useState("");
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [agree, setAgree] = useState(false);
  const onChangeAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgree(e.target.checked);
    // setAgree((agree)=>!agree)
  };

  const onClickHandler = () => {
    setAction(action === "Login" ? "Sign" : "Login");
  };

  const onSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid()) {
      alert(`${action} Success`);
    } else {
      alert("invalid input, please check again");
    }
  };

  const isValid = () => {
    const loginValid = email.trim() === "" || password.trim() === "" || !agree;
    return action === "Login" ? loginValid : loginValid || name.trim() === "";
  };

  return (
    <>
      <div className="w-[375px] bg-white py-10 px-6 text-[#4b4b4b]">
        <h1 className="text-xl font-bold mb-[10px]">{action} Into App</h1>
        <p className="text-sm mb-5">Please enter your details to continue.</p>
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={onSubmitHandler}
        >
          {action === "Sign" && (
            <Input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={onChangeName}
              // required
            />
          )}
          <Input
            type="email"
            placeholder="someone@example.com"
            value={email}
            onChange={onChangeEmail}
            // required
          />
          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={onChangePassword}
            // required
          />
          <Checkbox checked={agree} onChange={onChangeAgree}>
            <span>
              I agree with <em className="not-italic font-bold">terms</em> and{" "}
              <em className="not-italic font-bold">policies.</em>
            </span>
          </Checkbox>
          <Button type="submit" disabled={isValid()}>
            {action === "Login" ? "Log in" : "Sign in"}
          </Button>
          <Button
            type="button"
            style="border border-[#4f4f4f]"
            onClick={onClickHandler}
          >
            Go To {action === "Login" ? "Log in" : "Sign in"}
          </Button>
        </form>
      </div>
    </>
  );
};
export default Login;
