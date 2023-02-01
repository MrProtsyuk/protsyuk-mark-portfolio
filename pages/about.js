import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col pt-10 justify-center items-center bg-gradient-to-r from-white to-gray-200"
    >
      <div className="text-green-800 text-4xl md:text-5xl mt-6">
        About Myself
      </div>
      <div className="flex flex-wrap justify-center items-center pb-10">
        <Image
          src="/images/coverpic.jpeg"
          alt="cover image"
          width={400}
          height={200}
          className="w-72 sm:w-80 border rounded-lg border-transparent m-8 drop-shadow-2xl"
        />
        <div className="flex flex-col w-72 sm:w-6/12 h-auto border bg-gradient-to-r from-white to-gray-200 border-slate-500 rounded-md drop-shadow-2xl p-5 my-5">
          <p className="p-4 text-sm sm:text-lg">
            Hello! My name is Mark Protsyuk and I am a Software Engineer from
            Sacramento, CA! I am a recent UC Davis Bootcamp graduate. I have had
            some local intern experience and now I am excited to work in a
            professional enviornment. You can view some of the projects I have
            worked on below.
          </p>
          <p className="p-4 text-sm sm:text-lg">
            Some activities that I like to do in my free time are snowboarding,
            playing music, and climbing. These activities really help me to push
            myself into trying new things regardless of the difficulty I may
            encounter.
          </p>
          <div className="flex flex-row gap-6 justify-center my-4">
            <Image
              className="drop-shadow-sm hover:drop-shadow-2xl"
              width={60}
              height={1}
              src="/images/snowboarding.png"
              alt="snowboarding icon"
            />
            <Image
              className="drop-shadow-sm hover:drop-shadow-xl"
              width={60}
              height={1}
              src="/images/climbing.png"
              alt="climbing icon"
            />
            <Image
              className="drop-shadow-sm hover:drop-shadow-xl"
              width={60}
              height={1}
              src="/images/programming.png"
              alt="programming icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
