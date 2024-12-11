import React from "react";

const Header = ({ ...props }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto xs:px-2 sm:px-2 md:px-0 box-border">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Recipe Calories</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle !text-emerald-500">
              <div className="indicator !text-emerald-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-5 w-5 !text-emerald-500"
                >
                  <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Start Hero */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(./images/hero-bg.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center w-8/12 text-white">
            <div className="w-full flex flex-col gap-6">
              <h1 className="mb-5 text-5xl font-bold">
                Discover an exceptional cooking class tailored for you!
              </h1>
              <p>
                Delicious has even grown into an amazing team of individuals
                working together to create the best possible recipes. We create
                recipes, step-by-step tutorials, and videos that focus on quick
                and easy meals for the everyday home cook to show you that it
                really doesn’t take much to make a homemade meal completely from
                scratch.
              </p>
              <div className="flex flex-row items-center gap-10 justify-center text-xl xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                <button className="bg-emerald-600 hover:bg-transparent border rounded-3xl px-5 sm:px-4 xs:px-4 md:px-5 py-2 sm:py-2 xs:py-2 md:py-2 ">
                  Explore Now
                </button>
                <button className="bg-emerald-600 hover:bg-transparent border rounded-3xl px-5 sm:px-4 xs:px-4 md:px-5 py-2 sm:py-2 xs:py-2 md:py-2">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End Hero */}
      </div>
    </React.Fragment>
  );
};

export default Header;
