import React from "react";
import { DiReact } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress, SiMongodb } from "react-icons/si";

const Home = () => {
  return (
    <div
      id="home"
      className="flex px-1 pt-9 pb-8 md:flex-row-reverse md:gap-8 md:px-7 lg:gap-15
     flex-col justify-center items-center scroll-mt-14"
    >
      <div className="order-1 flex w-full justify-center px-4 md:order-1 md:flex-1 md:min-w-0 md:px-2 md:py-7">
        <img
          alt="Divyanshu Sahu"
          className="relative aspect-[3/4] w-40 rounded-lg object-cover transition-all duration-300 hover:scale-[1.01] dark:brightness-90 dark:shadow-[0_0_50px_10px_rgba(200,140,211,0.45)] shadow-[0_0_50px_10px_rgba(30,40,44,0.3)] sm:w-52 md:w-[95%]"
          src="/D1.webp"
        />
      </div>
      {/* w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left */}
      <div className="order-2 flex w-full flex-col items-center text-center md:order-2 md:flex-1 md:min-w-0 md:items-start md:text-left">
        <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-2  animate-fade-in">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-purple-500 ">
            console.log
          </span>
          <span className="text-slate-800 dark:text-slate-100">(</span>
          <span className="text-yellow-600 dark:text-yellow-400 font-serif tracking-wide">
            'Divyanshu Sahu'
          </span>
          <span className="text-slate-800 dark:text-slate-100">);</span>
        </h1>
        <div className="inline-block px-4 py-2 rounded-full bg-emerald-100  font-bold  font-serif dark:bg-violet-800/20 text-green-900 dark:text-violet-300 text-[18px] tracking-wider  mb-2">
          Full-Stack Developer | MERN Stack
        </div>
        <div className="flex flex-wrap justify-center items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 gap-x-2.5 gap-y-1 text-emerald-800 dark:text-emerald-300 text-[16px] font-medium mb-2">
          <span className="flex items-center gap-0.5">
            <DiReact className="text-sky-400" size={23} />
            React
          </span>

          <span className="flex items-center gap-0.5">
            <TbBrandJavascript className="text-amber-500" size={23} />
            JavaScript
          </span>

          <span className="flex items-center gap-0.5">
            <FaNodeJs className="text-green-600" size={23} />
            Node.js
          </span>

          <span className="flex items-center gap-0.5">
            <SiExpress className="text-gray-700 dark:text-white" size={23} />
            Express
          </span>

          <span className="flex items-center gap-0.5">
            <SiMongodb className="text-green-600" size={23} />
            MongoDB
          </span>
        </div>

        <div className=" relative bg-slate-100 dark:bg-slate-800 p-2 sm:p-5 rounded-lg border-l-4 border-emerald-500 animate-fade-in text-start ">
          <p
            className="tracking-wide reveal-mask text-lg md:text-xl text-slate-700 dark:text-slate-300 font-serif leading-snug"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            Hi, I’m <strong>Divyanshu Sahu,</strong> a full-stack developer
            focused on the MERN stack. I build responsive web applications
            with React and JavaScript, and develop backend features using
            Node.js, Express, and MongoDB. <br />
            <span className="font-extralight text-base md:text-lg leading-none sm:leading-tight ">
              {" "}
              My projects include JWT-based authentication and an AI
              interview-prep platform using the Gemini API. I’ve also worked
              with Redux Toolkit, Context API, and REST API integration. <br />
              I’m seeking a junior developer opportunity where I can contribute
              across frontend or full-stack development and continue growing as
              an engineer.
            </span>
            <span className="inline-block w-2 h-5  bg-emerald-500 ml-1 animate-pulse"></span>
          </p>
          <div className="mt-1 font-mono font-semibold text-emerald-500">
            <span className="mr-1">&gt;</span>

            <a
              href="/DivyanshuSahu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition duration-300"
            >
              Resume.view()
            </a>
            <span className="mx-2 text-gray-500">|</span>
            <a
              href="/DivyanshuSahu_Resume.pdf"
              download="DivyanshuSahu_Resume.pdf"
              className="hover:text-black dark:hover:text-white transition duration-300"
            >
              Resume.download()
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
