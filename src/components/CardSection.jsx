import React from "react";
import Card from "./Card";

const projects = [
  {
    title: "D Music Player",
    desc: "A modern music player inspired by Spotify, built with React, featuring song fetching via the Audius API, play/pause, next/previous controls, seek functionality, and a fully responsive UI.",
    url: "https://dmusic-audiusapi.netlify.app/",
    github: "https://github.com/DivyanshuSahu2000/Music_Player",
    tags: ["JavaScript", "React", "Context API", "CSS"],
  },
  {
    title: "Anki Arts",
    desc: "A visually rich and responsive art gallery built with React, allowing users to explore paintings, view artwork details, and add selected items to the cart.",
    url: "https://ankiartsp.netlify.app/",
    github: "https://github.com/DivyanshuSahu2000/AnkiArts",
    tags: ["JavaScript", "React", "Context API", "Tailwind CSS"],
  },
  {
    title: "Myntra",
    desc: "A fully responsive Myntra clone built with React and Redux Toolkit, where users can add or remove products from the bag and view pricing details on a dedicated checkout page.",
    url: "https://m9ntra-c10ne.netlify.app/",
    github: "https://github.com/DivyanshuSahu2000/Myntra",
    tags: ["JavaScript", "React", "CSS", "Redux Toolkit"],
  },
  {
    title: "Media Search App",
    desc: "A React-based media search application using public APIs, featuring debounced search, Redux Toolkit state management, and a responsive results grid.",
    url: "https://d-media-search.netlify.app/",
    github: "https://github.com/DivyanshuSahu2000/RTK-Project-Media_search",
    tags: ["React", "JavaScript", "APIs", "Redux Toolkit"],
  },
  {
    title: "PassWorld",
    desc: "A responsive password manager built with React and Context API, enabling users to securely add, edit, and manage stored passwords through a clean UI.",
    url: "https://dpassworld.netlify.app/",
    github: "https://github.com/DivyanshuSahu2000/Password_Manager",
    tags: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Portfolio",
    desc: "A modern, fully responsive personal portfolio built with React and Tailwind CSS to showcase projects, skills, and experience with a clean UI.",
    url: "https://divyanshu-sahu.netlify.app/",
    github: "https://github.com/DivyanshuSahu2000/Personal-Portfolio",
    tags: ["JavaScript", "React", "Tailwind CSS"],
  },
];

const CardSection = () => {
  return (
    <div
      id="projects"
      className="md:px-16 sm:px-10 p-1 scroll-mt-20 sm:scroll-mt-16"
    >
      <div className="flex flex-col items-center">
        <div className="text-3xl  text-emerald-800 dark:text-emerald-300  underline underline-offset-[12px]  flex   justify-center font-mono font-bold md:mt-8">
          <div>
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-emerald-500 to-purple-500 hover:text-white transition">
              [
            </span>
            <span className=" dark:text-amber-100 text-gray-900">
              {" "}
              My Projects{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-purple-500 hover:text-white transition">
              ]
            </span>
          </div>
        </div>
        <p className="mt-3 mb-3 text-sm sm:text-base font-medium text-center dark:text-amber-100/80 text-gray-800 cursor-default select-none">
          <span className="opacity-80">{`{ `}</span>
          <span className="sm:hidden">
            {" "}
            Built 5+ real-world React projects with APIs
          </span>
          <span className="hidden sm:inline">
            Built 5+ real-world React projects including API-driven applications
          </span>
          <span className="opacity-80">{` }`}</span>
        </p>
      </div>

      <div className=" m-3 mx-0.5 md:flex lg:flex-row lg:items-center flex-wrap w-full flex flex-col flex-1 justify-center items-stretch gap-1.5 sm:gap-5 p-1 md:p-2 dark:text-amber-100    ">
        {projects.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
