import {
  FiCode,
  FiCpu,
  FiLayers,
  FiServer,
  FiTool,
} from "react-icons/fi";

const skillGroups = [
  {
    category: "Frontend",
    icon: <FiCode size={19} />,
    skills: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "React Router",
    ],
  },
  {
    category: "Frontend",
    icon: <FiCode size={19} />,
    skills: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "React Router",
    ],
  },
  {
    category: "Backend & Database",
    icon: <FiServer size={19} />,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "bcrypt.js",
      "Multer",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    category: "Tools & Deployment",
    icon: <FiTool size={19} />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vite",
      "Netlify",
      "Vercel",
    ],
  },
  {
    category: "State Management",
    icon: <FiLayers size={19} />,
    skills: [ "Context API","Redux Toolkit"],
  },
  {
    category: "AI Integration",
    icon: <FiCpu size={19} />,
    skills: ["Google Gemini API", "AI-powered application development"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-3 py-10 scroll-mt-20 sm:px-8 md:px-16 md:py-12"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-emerald-800 dark:text-emerald-300 font-mono font-bold text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-emerald-500 to-purple-500">
            [
          </span>
          <span className="dark:text-amber-100 text-gray-900"> Skills </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-purple-500">
            ]
          </span>
        </h2>
        <p className="mt-3 text-center text-sm font-medium text-gray-700 dark:text-amber-100/80 sm:text-base">
          <span className="opacity-80">{"{ "}</span>
          Technologies I use across Frontend and FullStack projects
          <span className="opacity-80">{" }"}</span>
        </p>
      </div>

      <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {skillGroups.map(({ category, icon, skills }, index) => (
          <div
            key={category}
            className={`group relative overflow-hidden rounded-lg border border-slate-300/80 bg-white/70 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-lg hover:shadow-emerald-950/10 dark:border-slate-600/80 dark:bg-slate-800/70 dark:hover:shadow-emerald-950/30 sm:col-span-1 lg:col-span-2 ${
              index === 3
                ? "lg:col-start-2"
                : index === 4
                  ? "lg:col-start-4"
                  : ""
            }`}
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-500 to-purple-500 opacity-70 transition-opacity group-hover:opacity-100" />
            <div className="mb-3 flex items-center gap-2 border-b border-slate-300/70 pb-2 dark:border-slate-600/70">
              <span
                aria-hidden="true"
                className="shrink-0 text-emerald-600 dark:text-emerald-400"
              >
                {icon}
              </span>
              <h3 className="font-mono font-bold text-slate-800 dark:text-slate-100">
                <span className="mr-1.5 text-emerald-500">&gt;</span>
                {category}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-slate-300/80 bg-slate-100/70 px-2.5 py-1 font-mono text-xs text-slate-700 transition-colors group-hover:border-emerald-500/30 dark:border-slate-600/80 dark:bg-slate-900/40 dark:text-slate-200 sm:text-sm"
                >
                  <span className="mr-1 text-emerald-600 dark:text-emerald-400">
                    &lt;
                  </span>
                  {skill}
                  <span className="ml-1 text-purple-600 dark:text-purple-400">
                    /&gt;
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
