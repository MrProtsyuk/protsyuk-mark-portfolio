import Image from "next/image";
import Link from "next/link";

const projectList = [
  {
    image: "/images/englishcafe.png",
    name: "English Cafe",
    status: "*In Developlment",
    description: "",
    skills: "TypeScript, ReactJS, NextJS, GraphQL, Tailwind",
    page: "N/A",
    github: "",
  },
  {
    image: "",
    name: "E-Commerce App",
    status: "*In Developlment",
    description: "",
    skills: "",
    page: "",
    github: "",
  },
  {
    image: "",
    name: "Web-3 App",
    status: "*In Developlment",
    description: "",
    skills: "",
    page: "",
    github: "",
  },
  {
    image: "",
    name: "Javascript Game",
    status: "*In Developlment",
    description: "",
    skills: "",
    page: "",
    github: "",
  },
  {
    image: "",
    name: "Bretya App",
    status: "*In Developlment",
    description: "",
    skills: "",
    page: "",
    github: "",
  },
];

export default function Projects() {
  return (
    <div className="flex justify-center items-center bg-gray-500">
      <div className="flex flex-wrap mt-20 mb-10 justify-center items-center">
        {projectList.map((project, index) => (
          <div className="flex flex-wrap justify-center items-center m-4 p-4 w-96 bg-white border rounded-lg hover:drop-shadow-xl">
            <Image src={project.image} width={300} height={200} />
            <div className="flex flex-col">
              <p className="text-lg">{project.name}</p>
              <p className="text-sm text-slate-400">{project.status}</p>
              <p className="text-sm">{project.description}</p>
              <p className="text-sm">Skills: {project.skills}</p>

              <Link
                href={project.page}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm"
              >
                Website: {project.page}
              </Link>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm"
              >
                Github: {project.github}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
