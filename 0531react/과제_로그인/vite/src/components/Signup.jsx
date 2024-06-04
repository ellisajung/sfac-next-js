import Button from "./Button";
import Input from "./Input";
import Terms from "./Terms";
import Title from "./Title";

const Login = () => {
  return (
    <div>
      <Title
        title="Sign Into App"
        subtitle="Please enter your details to continue."
      />
      <Input type="text" placeholder="Enter Your Name" />
      <Input type="email" placeholder="someone@example.com" />
      <Input type="password" placeholder="Enter Password" />
      <Terms />
      <Button text="Sign In" />
      <Button text="Go To Log In" />
    </div>
  );
};

export default Login;
