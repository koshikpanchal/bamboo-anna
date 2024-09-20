import { Link } from "react-router-dom";
import "./ErrorBoundary.scss";
import { Navbar } from "../navbar/Navbar";

const ErrorBoundary = () => {
  return (
    <>
      <Navbar />
      <div className="error-boundary">
        <h1>Oops! Something went wrong.</h1>
        <p>We're sorry, an unexpected error occurred.</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </>
  );
};

export { ErrorBoundary };
