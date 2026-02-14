import React from "react";

const Header = ({ theme, toggleTheme }) => {
  return (
    <div className="sticky top-0 z-50">
      <header className=" md:px-10 px-2 sm:px-8 dark:text-amber-50 font-medium text-zinc-900 bg-amber-50/30 py-4 flex justify-between items-center backdrop-blur-xs  dark:bg-slate-900/30  border-b border-slate-200 dark:border-slate-600 ">
        <div className="flex items-center justify-center">
          <a href="/">
            <div className=" text-xl md:text-2xl font-mono font-bold sm:mr-8 mr-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-purple-500 ">
                &lt;
              </span>
              <span className="dark:text-slate-100 ">DS</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-700 ">
                /&gt;
              </span>
            </div>
          </a>
          <nav className="md:block">
            <ul className="flex gap-3 sm:gap-8">
              <li>
                <a
                  className="dark:text-slate-100 hover:text-emerald-400 transition-colors duration-200 animated-link"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="dark:text-slate-100  hover:text-emerald-400 transition-colors duration-200 animated-link"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <div className="flex items-center gap-4 ">
            <button
              onClick={toggleTheme}
              className="flex items-center  justify-center w-10 h-10 rounded-md bg-slate-200 dark:bg-slate-700 transition-colors duration-200 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer"
              aria-label="Switch to dark mode"
            >
              {theme == "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
