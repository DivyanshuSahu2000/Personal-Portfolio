import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className=" flex px-1 md:px-7 pt-9  pb-8 md:flex-row-reverse 
     flex-col
     justify-center items-center "
    >
      <div className="w-3/5 flex justify-center mb-6 sm:mb-0 sm:p-6">
        <img
          alt="Divyanshu Sahu"
          className="relative rounded-lg  transition-all duration-300 dark:brightness-90 hover:scale-[1.01]  object-cover w-full h-auto 
          dark:shadow-[0_0_50px_10px_rgba(200,140,211,0.45)]
      shadow-[0_0_50px_10px_rgba(30,40,44,0.5)]"
          src="/D1.jpg"
        />
      </div>
      {/* w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left */}
      <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
        <h1
          className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-2  animate-fade-in"
          //   style={{ animationDelay: "0.2s" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-purple-500 ">
            console.log
          </span>
          <span className="text-slate-800 dark:text-slate-100">(</span>
          <span className="text-yellow-600 dark:text-yellow-400">
            'Divyanshu Sahu'
          </span>
          <span className="text-slate-800 dark:text-slate-100">);</span>
        </h1>
        <div className="inline-block px-4 py-2 rounded-full bg-emerald-100  font-medium dark:bg-violet-800/20 text-green-900 dark:text-violet-300 text-[18px] tracking-wider text-xl mb-2">
          Frontend Web Developer
        </div>
        <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-[16px] font-medium mb-2">
          React • JavaScript • Redux Toolkit • Tailwind CSS • Git • GitHub
        </div>

        <div className=" relative bg-slate-100 dark:bg-slate-800 p-2 sm:p-5 rounded-lg border-l-4 border-emerald-500 animate-fade-in">
          <p
            className="tracking-wide reveal-mask text-lg md:text-xl text-slate-700 dark:text-slate-300 font-serif leading-snug"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            Hi, I’m <strong>Divyanshu Sahu,</strong> a Frontend Web Developer
            who builds responsive, real-world web applications using React,
            Tailwind CSS, and modern JavaScript. <br />
            <span className="font-extralight text-base md:text-lg leading-none sm:leading-tight ">
              {" "}
              I have hands-on experience with Context API, Redux Toolkit, and
              API integration through practical projects. <br />I enjoy turning
              ideas into interactive products and am seeking junior frontend
              developer role where I can contribute, learn, and grow as a
              developer.
            </span>
            <span className="inline-block w-2 h-5 bg-emerald-500 ml-1 animate-pulse"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
