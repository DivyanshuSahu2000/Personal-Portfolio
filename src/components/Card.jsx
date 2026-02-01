import React from "react";

const Card = ({ title, url, desc, tags = [] }) => {
  return (
    <>
      {" "}
      <div className=" card lg:w-[48%] w-full h-full border-2 p-2 xs:px-4 px-2 border-gray-600 rounded-lg hover:border-gray-500 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 md:min-h-[260px] flex flex-col ">
        <div className="xs:gap-2 gap-1 flex items-center mb-1.5 border-b pb-1 border-gray-500 ">
          <span className="w-2 h-2 xs:w-3 xs:h-3 rounded-full bg-red-500"></span>

          <span className="w-2  h-2 xs:w-3 xs:h-3 rounded-full bg-yellow-500"></span>

          <span className="w-2 h-2 xs:w-3 xs:h-3 rounded-full bg-green-500"></span>
          <div className=" mx-0.5 xs:mx-2 xxs:text-sm text-xs xs:text-lg ">
            {url}
          </div>
        </div>
        <div className=" backdrop-blur-3xl flex  flex-1 justify-between items-center ">
          <div>
            <h1 className="text-lg  text-slate-800 dark:text-slate-100 font-bold font-mono transition-colors duration-200 flex items-center">
              <span className="text-emerald-500 mr-2">&gt;</span> {title}
            </h1>
            <p className="ml-4 text-slate-800/80 dark:text-slate-100/70">
              {desc}
            </p>
          </div>
          {/* <button > */}
          <a
            href={url}
            target="_blank"
            className="group  px-4 py-2 h-8 rounded-md text-slate-100 bg-slate-700 flex items-center gap-2 shadow-md transition-all duration-300 hover:bg-emerald-600"
          >
            <span className="text-sm font-mono">Live</span>
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              🚀
            </span>
          </a>
          {/* </button> */}
        </div>
        <div>
          <div className=" gap-2 flex flex-wrap ml-4 text-xs my-2 text-gray-800 dark:text-amber-100 ">
            {tags.map((tag, i) => (
              <button
                key={i}
                className="rounded-3xl p-2 border-1 bg-gray-400/10  border-gray-400 gap-1"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-600 hover:text-white transition">
                  &lt;
                </span>
                <span className="dark:text-slate-100 ">{tag}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-700 hover:text-white transition">
                  /&gt;
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
