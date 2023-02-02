import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900">
      <div className="flex flex-col justify-center items-center text-white w-full">
        <Link
          href="/"
          className="p-2 mt-2 text-4xl md:text-5xl 2xl:text-7xl hover:text-gray-500"
        >
          Mark Protsyuk
        </Link>
        <div className="flex flex-row justify-center items-center gap-4">
          <Link
            href="https://www.instagram.com/mark.protsyuk/?hl=en"
            className="hover:text-violet-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram size={40} />
          </Link>
          <Link
            href="https://github.com/MrProtsyuk"
            className="hover:text-slate-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub size={40} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/markprotsyuka72375225/"
            className="hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin size={40} />
          </Link>
        </div>
        <Link
          href="/"
          className="text-slate-500 p-3 text-lg md:text-xl 2xl:text-2xl hover:text-white"
        >
          © Mark Protsyuk 2022
        </Link>
      </div>
    </div>
  );
}
