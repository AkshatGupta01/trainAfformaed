import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-8 p-12 shadow rounded">
          <h1 className="text-4xl">
            Welcome to Trains Schedule Project by Hardik Dheer
          </h1>

          <Link
            to="/train-list"
            className="font-medium mt-3 rounded-md bg-purple-600 pt-2 p-3 text-white"
          >
            View Schedule
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
