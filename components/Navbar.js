import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center fixed w-full left-0 top-0 z-50 ease-in duration-300">
      <div>
        <p className="border rounded-sm m-4 p-4 hover:text-white hover:bg-slate-600 text-4xl">
          LOGO
        </p>
      </div>
      <ul className="flex flex-row gap-4 m-4">
        <li className="border rounded-sm p-4 hover:text-white hover:bg-slate-600">
          <Link href="/">Home</Link>
        </li>
        <li className="border rounded-sm p-4 hover:text-white hover:bg-slate-600">
          <Link href="/about">About Me</Link>
        </li>
        <li className="border rounded-sm p-4 hover:text-white hover:bg-slate-600">
          <Link href="/work">My Work</Link>
        </li>
        <li className="border rounded-sm p-4 hover:text-white hover:bg-slate-600">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
