import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1 className=" text-center font-extrabold text-4xl mt-20">
        Ooopppsss!!!
      </h1>
      <Link className=" text-center" to={"/"}>
        Go back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
