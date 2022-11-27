import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center z-10">
      <p className="m-4 text-4xl">Mark Protsyuk</p>
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
