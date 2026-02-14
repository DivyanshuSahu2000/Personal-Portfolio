import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      className="px-4 py-6 relative overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 
dark:from-violet-900/5 dark:via-violet-900/10 dark:to-violet-900/20"
    >
      <div className="container mx-auto max-w-5xl ">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-3xl text-slate-800 dark:text-slate-100 font-mono mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-600 ">
              get_in_touch
            </span>
            <span className="text-slate-800 dark:text-slate-100">();</span>
          </h2>
          <p
            className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            Open to frontend developer opportunities and collaborations. Feel
            free to reach out — I’d love to connect. Do you have some feedback
            or suggestions? I'd love to hear from you!
          </p>
        </div>
        <div className="flex justify-center gap-8 mb-4 md:mb-6 ">
          {" "}
          <a
            href="mailto:sdivyanshusahu172@gmail.com"
            className="transform transition-all duration-300 hover:scale-110"
          >
            <div className="relative trace ">
              <div className="invert transition-all duration-200 ">
                <IoIosMail size={45} />
              </div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/divyanshu-sahu-2000sahu"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-110"
          >
            <div className="relative trace">
              <div className="invert transition-all duration-200">
                <FaLinkedin size={38} />
              </div>
            </div>
          </a>
          <a
            href="https://github.com/DivyanshuSahu2000"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-110"
          >
            <div className="relative trace">
              <div className="invert transition-all duration-200">
                <FaGithub size={38} />
              </div>
            </div>
          </a>
        </div>
        <div className="text-center text-sm text-slate-500 dark:text-slate-400 font-mono">
          <div className="m-2 font-mono font-medium text-emerald-500">
            <a
              href="/DivyanshuSahu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white text-yellow-600 dark:text-yellow-500 transition duration-300"
            >
              <span className="text-emerald-500">[</span> Resume.view(){" "}
              <span className="text-emerald-500">]</span>
            </a>
            <a
              href="/DivyanshuSahu_Resume.pdf"
              download="DivyanshuSahu_Resume.pdf"
              className="hover:text-black dark:hover:text-white text-yellow-600 dark:text-yellow-500 transition duration-300"
            >
              <span className="text-emerald-500"> [</span> Resume.download(){" "}
              <span className="text-emerald-500">]</span>
            </a>
            <span className="text-slate-400">;</span>
          </div>
          <p className="mb-2">
            <span className="text-emerald-500">const</span> website =
            <span className="text-yellow-600 dark:text-yellow-500">
              {" "}
              'Built with React.js &amp; Tailwind'
            </span>
            ;
          </p>
          <p>
            <span className="text-emerald-500">console</span>.log(
            <span className="text-yellow-600 dark:text-yellow-500">
              '© {new Date().getFullYear()} Divyanshu Sahu'
            </span>
            );
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
