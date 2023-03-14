import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-8 mb-3 lg:pt-5 lg:px-32">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-lg font-bold leading-relaxed inline-block "
              href="#pablo"
            >
              Omah .
            </a>
            <button
              className="translate-x-4 cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img src="./image/menu.png" alt="" className="inline-block" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col items-center justify-center w-full lg:flex-row lg:gap-10 list-none lg:ml-auto gap-3">
              <li className="nav-item">
                <p className="text-base font-medium text-text-primary-color text-center mx-auto cursor-pointer hover:opacity-75">
                  Home
                </p>
              </li>
              <li className="nav-item">
                <p className="text-base font-medium text-text-primary-color text-center mx-auto cursor-pointer hover:opacity-75">
                  For rent
                </p>
              </li>
              <li className="nav-item">
                <p className="text-base font-medium text-text-primary-color text-center mx-auto cursor-pointer hover:opacity-75">
                  For sale
                </p>
              </li>
              <li className="nav-item">
                <p className="text-base font-medium text-text-primary-color text-center mx-auto cursor-pointer hover:opacity-75">
                  Blog
                </p>
              </li>
            <button className="bg-bg-primary-color text-white py-3 md:py w-full rounded-sm mt-5 block lg:hidden">Log in</button>
            </ul>
            <button className="bg-bg-primary-color text-white px-20 py-2 rounded-sm hidden lg:block">LogIn</button>
          </div>
        </div>
      </nav>
    </>
  );
}
