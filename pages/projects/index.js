import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

const projectList = [
  {
    image: "/images/englishcafe.png",
    name: "English Cafe",
    status: "",
    description: "A place to learn english + the gospel.",
    skills: "TypeScript, NextJS, GraphQL, Tailwind",
    page: "https://english-cafe.vercel.app/",
    github: "https://github.com/Ntarasiuk/english-cafe",
  },
  {
    image: "/images/w.png",
    name: "Teacher Source",
    status: "",
    description: "A Storehouse of Childrens and Youth Ministry Curriculum.",
    skills: "TypeScript, NextJS, GraphQL, Material UI",
    page: "https://www.teachersource.life/",
    github: "https://github.com/Ntarasiuk/wol-teacher-source",
  },
  {
    image: "/images/quiz.jpeg",
    name: "Random Quiz",
    status: "",
    description: "A quiz page built with NextJS and a quiz api.",
    skills: "NextJS, Tailwind, API",
    page: "https://random-quiz-nine.vercel.app/",
    github: "https://github.com/MrProtsyuk/random-quiz",
  },
  {
    image: "/images/bot.png",
    name: "Chaty AI",
    status: "",
    description: "Chat GPT made from home!",
    skills: "ReactJS, NodeJS, API",
    page: "https://chaty-ai.vercel.app/",
    github: "https://github.com/MrProtsyuk/Chaty-AI",
  },
  {
    image: "/images/chart.png",
    name: "Chart Dashboard App",
    status: "*In development",
    description:
      "A useful application for buisness owners to track monthly orders.",
    skills: "NextJS, Tailwind, MongoDB, NodeJS",
    page: "",
    github: "https://github.com/MrProtsyuk/user-dash-app",
  },
];

export default function Projects() {
  const { ref: projectRef, inView: projectIsVisible } = useInView();
  return (
    <div
      ref={projectRef}
      id="projects"
      className="flex flex-col justify-center items-center bg-gray-600 pt-10"
    >
      <div className="text-white text-4xl md:text-5xl 2xl:text-7xl mb-6 p-2 text-center">
        Some Of My Projects
      </div>
      <div className="flex text-black bg-white rounded-lg text-sm sm:text-lg xl:text-xl text-center p-2 m-1 mx-5">
        Although I have worked on a number of different projects, especially in
        the BootCamp. These are some of the more recent ones that I would like
        to share.
      </div>
      <div className="flex flex-wrap justify-center items-center pb-10">
        {projectList.map((project, index) => (
          <div
            key={project.name}
            className="flex flex-row items-center m-4 p-4 w-72 sm:w-96 lg:w-4/12 bg-white border rounded-lg hover:drop-shadow-xl"
          >
            <div className="flex flex-col">
              <div>
                <Image
                  src={project.image}
                  alt="Project image"
                  width={200}
                  height={200}
                  className="w-16 sm:w-16 h-16 sm:h-16 mr-2"
                />
              </div>
              <Link
                href={project.page}
                className="text-sm sm:text-lg xl:text-2xl m-1"
              >
                {project.name}
              </Link>
              <p className="text-sm sm:text-lg text-slate-400 m-1">
                {project.status}
              </p>
              <p className="text-sm sm:text-lg m-1">{project.description}</p>
              <p className="text-sm sm:text-lg m-1">{project.skills}</p>
              <Link href="/" className="m-1">
                <AiOutlineGithub className="text-2xl" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
