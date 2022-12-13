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
      <div className="flex flex-wrap mt-20 mb-10 justify-center items-center h-screen">
        {projectList.map((project, index) => (
          <Link
            href={"/projects/"}
            key={project.name}
            className="flex flex-wrap justify-center items-center m-2 p-0 sm:m-4 sm:p-4 w-72 sm:w-96 bg-white border rounded-lg hover:drop-shadow-xl"
          >
            <Image src={project.image} width={300} height={200} />
            <div className="flex flex-col">
              <p className="text-lg">{project.name}</p>
              <p className="text-sm text-slate-400">{project.status}</p>
              <p className="text-sm">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
