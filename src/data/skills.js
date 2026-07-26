import { FaDatabase } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaJava,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiFastapi,
  SiC,
  SiBitbucket,
  SiSqlite,
  //SiVisualstudiocode,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Angular", icon: FaAngular, color: "text-red-600" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "FastAPI", icon: SiFastapi, color: "text-green-400" },
      { name: "Python", icon: FaPython, color: "text-yellow-300" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "C Programming", icon: SiC, color: "text-blue-500" },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
      { name: "Oracle Database", icon: FaDatabase, color: "text-red-500" },
      { name: "SQLite", icon: SiSqlite, color: "text-indigo-400" },
      { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "Bitbucket", icon: SiBitbucket, color: "text-blue-500" },
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
      {
        name: "VS Code",
        icon: FaCode,
        color: "text-blue-400",
      },
    ],
  },

  {
    title: "Core Computer Science",
    skills: [
      { name: "Operating Systems", icon: null, color: "" },
      { name: "Data Structures", icon: null, color: "" },
      { name: "Algorithms", icon: null, color: "" },
      { name: "Object-Oriented Programming", icon: null, color: "" },
    ],
  },
];