import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-gray-600">
      <div className="flex flex-col justify-center items-center text-white w-full">
        <Link href="/" className="p-2 mt-2 text-4xl">
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
        <Link href="/" className="text-slate-500 p-3">
          © Mark Protsyuk 2022
        </Link>
      </div>
    </div>
  );
}
