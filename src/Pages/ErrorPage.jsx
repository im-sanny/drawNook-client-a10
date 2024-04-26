/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <section
        className="flex items-center bg-cover bg-center h-[100vh] "
        style={{
          backgroundImage: `url('https://i.ibb.co/xG8zZk2/reshot-illustration-404-line-art-illustration-F962-LXZBUG.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-[#FF0000]">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl text-grey font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-grey">
              But don't worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
