import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className=" flex px-1 md:px-7 lg:18 pt-12  pb-8 md:flex-row-reverse 
     flex-col
     justify-center items-center "
    >
      <div className="w-3/5 md:1/3  flex justify-center mb-8 sm:mb-0 sm:p-6">
        <img
          alt="Divyanshu Sahu"
          className="relative rounded-lg  transition-all duration-300 dark:brightness-90 hover:scale-[1.01] cursor-pointer object-cover w-full h-auto 
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
        <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-[16px] font-medium mb-2">
          Frontend Web Developer • JavaScript • React • Tailwind CSS
        </div>

        <div
          className="typewriter-container relative bg-slate-100 dark:bg-slate-800 p-5 rounded-lg border-l-4 border-emerald-500 animate-fade-in"
          //   style="animation-delay:0.4s"
        >
          <p className=" reveal-mask text-lg md:text-xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">
            Hi, I'm Divyanshu Sahu. I'm an aspiring Frontend Web Developer
            focused on JavaScript and React. I’m passionate about building
            clean, user-friendly, and engaging web experiences.
            <span className="inline-block w-2 h-5 bg-emerald-500 ml-1 animate-pulse"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

// <div className="px-4 pt-16 md:pt-24 pb-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"><div className="lg:order-last mx-auto opacity-0 w-full flex justify-center animate-fade-in" style="animation-delay:0.3s"><div className="relative w-full max-w-[350px] lg:max-w-[512px]"><div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-600 dark:to-slate-800 rounded-lg blur-lg opacity-50 group-hover:opacity-70 transition duration-1000"></div><img alt="Divyanshu Sahu" fetchpriority="high" width="512" height="768" decoding="async" data-nimg="1" className="relative rounded-lg shadow-xl transition-all duration-300 dark:brightness-90 hover:scale-[1.01] cursor-pointer object-cover w-full h-auto" style="color:transparent;max-width:100%;max-height:768px" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.36ef1a18.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.36ef1a18.png&amp;w=1080&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.36ef1a18.png&amp;w=1080&amp;q=75"><div className="absolute -bottom-3 -right-3 w-24 h-24 bg-slate-500/20 dark:bg-slate-300/10 rounded-full blur-xl z-0"></div><div className="absolute -top-3 -left-3 w-20 h-20 bg-slate-500/20 dark:bg-slate-300/10 rounded-full blur-xl z-0"></div></div></div><div className="flex flex-col justify-center h-full"><div className="mb-4 opacity-0 animate-fade-in" style="animation-delay:0.1s"><div className="inline-block px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-2">Senior Software Engineer • DevOps • Search Technologies</div></div><h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6 opacity-0 animate-fade-in" style="animation-delay:0.2s"><span className="gradient-text">console.log</span><span className="text-slate-800 dark:text-slate-100">(</span><span className="text-yellow-600 dark:text-yellow-400">'Hello World'</span><span className="text-slate-800 dark:text-slate-100">);</span></h1><div className="typewriter-container relative bg-slate-100 dark:bg-slate-800 p-5 rounded-lg border-l-4 border-emerald-500 opacity-0 animate-fade-in" style="animation-delay:0.4s"><p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-serif leading-relaxed">Hi, I'm Divyanshu. I'm a senior software engineer with expertise in DevOps and Apache Lucene search technologies.<span className="inline-block w-2 h-5 bg-emerald-500 ml-1 animate-pulse"></span></p></div><div className="mt-8 flex gap-4 items-center opacity-0 animate-fade-in" style="animation-delay:0.6s"><div className="flex items-center"><div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div><span className="text-sm text-slate-600 dark:text-slate-400 font-mono">Available for projects</span></div></div></div></div></div>
