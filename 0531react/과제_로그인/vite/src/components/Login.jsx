import Button from "./Button";
import Input from "./Input";
import Terms from "./Terms";
import Title from "./Title";

const Login = () => {
  return (
    <div className="w-375 h-434.03 bg-white px-25 py-40 rounded-lg">
      <Title
        title="Login Into App"
        subtitle="Please enter your details to continue."
      />
      <Input type="email" placeholder="someone@example.com" />
      <Input type="password" placeholder="Enter Password" />
      <Terms />
      <Button text="Log In" />
      <Button text="Go To Sign up" />
    </div>
  );
};

export default Login;
