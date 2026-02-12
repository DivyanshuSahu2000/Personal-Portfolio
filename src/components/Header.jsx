import React from "react";

const Header = ({ theme, toggleTheme }) => {
  return (
    <div className="sticky top-0 z-50">
      <header className=" md:px-15 px-2 sm:px-8 dark:text-amber-50 text-zinc-900 bg-amber-50/60 py-4 flex justify-between items-center backdrop-blur-xs  dark:bg-slate-900/30  border-b border-slate-300 dark:border-slate-600 ">
        <div className="flex items-center justify-center">
          <a href="/">
            <div className="text-xl font-mono font-bold sm:mr-8 mr-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-purple-500 ">
                &lt;
              </span>
              <span className="dark:text-slate-100 ">DS</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-700 ">
                /&gt;
              </span>
            </div>
          </a>
          <nav className="hiddn md:block">
            <ul className="flex   gap-3 sm:gap-8">
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
            {/* <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-md bg-slate-200 dark:bg-slate-700 transition-colors duration-200 hover:bg-slate-300 dark:hover:bg-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-slate-800 dark:text-slate-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M3 6h18M3 18h18"
                ></path>
              </svg>
            </button> */}
          </div>
        </div>
      </header>
      <div>
        {/* <img
          alt="Divyanshu Sahu"
          // fetchpriority="high"
          width="512"
          height="768"
          className="relative rounded-lg shadow-xl transition-all duration-300 dark:brightness-90 hover:scale-[1.01] cursor-pointer object-cover w-full h-auto"
          src="/D1.jpg"
        /> */}
      </div>
      {/* <div className="px-4 pt-16 md:pt-24 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div
            className="lg:order-last mx-auto opacity-0 w-full flex justify-center animate-fade-in"
            style="animation-delay:0.3s"
          >
            <div className="relative w-full max-w-[350px] lg:max-w-[512px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-600 dark:to-slate-800 rounded-lg blur-lg opacity-50 group-hover:opacity-70 transition duration-1000"></div>

              {/* <img
                alt="Divyanshu Sahu"
                fetchpriority="high"
                width="512"
                height="768"
                decoding="async"
                data-nimg="1"
                className="relative rounded-lg shadow-xl transition-all duration-300 dark:brightness-90 hover:scale-[1.01] cursor-pointer object-cover w-full h-auto"
                style="color:transparent;max-width:100%;max-height:768px"
                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.36ef1a18.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.36ef1a18.png&amp;w=1080&amp;q=75 2x"
                src="/D1.jpg"
              /> */}
      {/* <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-slate-500/20 dark:bg-slate-300/10 rounded-full blur-xl z-0"></div>
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-slate-500/20 dark:bg-slate-300/10 rounded-full blur-xl z-0"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center h-full">
            <div
              className="mb-4 opacity-0 animate-fade-in"
              style="animation-delay:0.1s"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-2">
                Senior Software Engineer • DevOps • Search Technologies
              </div>
            </div>
            <h1
              className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6 opacity-0 animate-fade-in"
              style="animation-delay:0.2s"
            >
              <span className="gradient-text">console.log</span>
              <span className="text-slate-800 dark:text-slate-100">(</span>
              <span className="text-yellow-600 dark:text-yellow-400">
                'Hello World'
              </span>
              <span className="text-slate-800 dark:text-slate-100">);</span>
            </h1>
            <div
              className="typewriter-container relative bg-slate-100 dark:bg-slate-800 p-5 rounded-lg border-l-4 border-emerald-500 opacity-0 animate-fade-in"
              style="animation-delay:0.4s"
            >
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
                Hi, I'm Divyanshu. I'm a senior software engineer with expertise
                in DevOps and Apache Lucene search technologies.
                <span className="inline-block w-2 h-5 bg-emerald-500 ml-1 animate-pulse"></span>
              </p>
            </div>
            <div
              className="mt-8 flex gap-4 items-center opacity-0 animate-fade-in"
              style="animation-delay:0.6s"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                <span className="text-sm text-slate-600 dark:text-slate-400 font-mono">
                  Available for projects
                </span>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Header;
