import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex h-screen bg-fixed bg-center bg-cover custom-img">
      <div className="flex flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-black/50">
        <div className="text-white text-4xl md:text-7xl xl:text-9xl">
          Mark Protsyuk
        </div>
        <div className="text-white text-xl md:text-4xl">Software Engineer</div>
        <div className="text-white text-md md:text-2xl">
          NextJS - GraphQL - Tailwind - NodeJS
        </div>
        <div className="border text-sm md:text-lg lg:text-2xl rounded-sm mt-2 p-2 sm:p-4 text-white hover:bg-white hover:text-gray-500">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/e/2PACX-1vTFlRXfRCrGhXAn14GfbD87Lh9eLAoEBJOZNfQw8_fvIFuqPwCbRnD8vDwmUDRO6u_YsBTRkIZIVw08/pub"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
