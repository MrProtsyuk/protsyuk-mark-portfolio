import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-900 p-2">
      <div className="flex flex-col justify-center items-center text-white w-full">
        <Link href="/" className="p-2 mt-2 text-4xl">
          LOGO
        </Link>
        <Link href="/contact" className="p-1 text-lg hover:text-slate-400">
          Lets get connected -{">"}
        </Link>
        <Link href="" className="hover:text-slate-400">
          insta icon
        </Link>
        <Link href="/" className="text-slate-400 hover:text-white p-3">
          @ all rights reserved
        </Link>
      </div>
    </div>
  );
}
