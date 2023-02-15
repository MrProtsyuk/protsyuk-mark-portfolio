import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#ffffff");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed w-full left-0 top-0 z-50 ease-in duration-300"
    >
      <div className="max-w-[1536px] m-auto flex justify-between items-center">
        <div className="flex" style={{ color: `${textColor}` }}>
          <Link
            className="border rounded-sm m-4 p-4 text-xl lg:text-4xl 2xl:text-5xl hover:text-black hover:bg-gray-200"
            href="/"
          >
            Mark Protsyuk
          </Link>
        </div>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:visible sm:flex gap-4 m-2 text-sm lg:text-xl 2xl:text-5xl scroll-smooth"
        >
          <li className="border rounded-sm p-4 hover:text-black hover:bg-gray-200">
            <Link href="/">Home</Link>
          </li>
          <li className="border rounded-sm p-4 hover:text-black hover:bg-gray-200">
            <Link className="scroll-smooth" href="/#about">
              About Me
            </Link>
          </li>
          <li className="border rounded-sm p-4 hover:text-black hover:bg-gray-200">
            <Link href="/#projects">Projects</Link>
          </li>
          <li className="border rounded-sm p-4 hover:text-black hover:bg-gray-200">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>

        <div className="block z-10 m-4">
          {nav ? (
            <AiOutlineClose
              size={40}
              onClick={() => setNav(false)}
              style={{ color: "#ffffff" }}
            />
          ) : (
            <AiOutlineMenu
              size={40}
              onClick={() => setNav(true)}
              style={{ color: `${textColor}` }}
            />
          )}
        </div>

        <div
          className={
            nav
              ? "absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/50 text-center ease-in duration-300"
              : "absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/70 text-center ease-in duration-300"
          }
        >
          <ul className="flex flex-col sm:flex-row gap-4 m-4">
            <li className="border rounded-sm p-4 bg-white text-black hover:text-slate-400">
              <Link href="/" onClick={() => setNav(false)}>
                Home
              </Link>
            </li>
            <li className="border rounded-sm p-4 bg-white text-black hover:text-slate-400">
              <Link href="#about" onClick={() => setNav(false)}>
                About Me
              </Link>
            </li>
            <li className="border rounded-sm p-4 bg-white text-black hover:text-slate-400">
              <Link href="/#projects" onClick={() => setNav(false)}>
                Projects
              </Link>
            </li>
            <li className="border rounded-sm p-4 bg-white text-black hover:text-slate-400">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
