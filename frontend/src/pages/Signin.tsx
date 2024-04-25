import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="">
        <Auth type="signin" />
      </div>
      <div className="hidden md:flex">
        <Quote />
      </div>
    </div>
  );
};

export default Signin;
