import React from "react";
import Card from "./Card";

const projects = [
  {
    title: "D Music Player",
    desc: "A simple and modern music player inspired by Spotify playlists, fully responsive and built with React and modern front-end tools, featuring play/pause, next/previous, seek functionality, and a clean UI",
    url: "https://dmusic-audiusapi.netlify.app/",
    tags: ["JavaScript", "React", "Context API", "CSS"],
  },
  {
    title: "Anki Arts",
    desc: "A visually rich and responsive art gallery website built with React & modern front-end tools. It showcases artwork it allows users to explore paintings, view detailed information about each artwork, and add selected paintings to the cart.",
    url: "https://ankiartsp.netlify.app/",
    tags: ["JavaScript", "React", "Context API", "Tailwind CSS"],
  },
  {
    title: "Myntra",
    desc: "A fully responsive Myntra clone built using React and Redux Toolkit, allowing users to add or remove items from the bag and view selected products with pricing details on a dedicated bag page.",
    url: "https://m9ntra-c10ne.netlify.app/",
    tags: ["JavaScript", "React", "CSS", "Redux Toolkit"],
  },
  {
    title: "Media Search App",
    desc: "A responsive React app that lets users search for images and videos using public APIs and displays results in an interactive grid.",
    url: "https://d-media-search.netlify.app/",
    tags: ["React", "JavaScript", "APIs", "Redux Toolkit"],
  },
  {
    title: "PassWorld",
    desc: "A fully responsive password manager built using React and Context API, enabling users to securely add, edit, and manage passwords through a clean and user-friendly interface.",
    url: "https://dpassworld.netlify.app/",
    tags: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Portfolio",
    desc: "A modern, fully responsive personal portfolio website built with React and Tailwind CSS, featuring reusable components and clean UI design.",
    url: "https://divyanshu-sahu.netlify.app/",
    tags: ["JavaScript", "React", "Tailwind CSS"],
  },
];

const CardSection = () => {
  return (
    <div id="projects" className="md:px-16 sm:px-10 p-1">
      <div className="text-3xl  text-emerald-800 dark:text-emerald-300  underline underline-offset-[12px]  flex justify-center font-mono font-bold mb-8 md:mt-8">
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
      <div className=" m-3 mx-0.5 md:flex lg:flex-row lg:items-center flex-wrap w-full flex flex-col flex-1 justify-center items-stretch gap-1.5 sm:gap-5 p-1 md:p-2 dark:text-amber-100    ">
        {projects.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
