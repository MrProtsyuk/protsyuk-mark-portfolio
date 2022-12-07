import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center bg-slate-100"
    >
      <div className="flex flex-wrap justify-center items-center">
        <div>
          <Image
            src="/images/coverpic.jpeg"
            width={400}
            height={200}
            className="w-96 border rounded-lg border-transparent m-8 drop-shadow-sm drop-shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-2 w-96 m-10 border bg-white border-slate-500 rounded-md drop-shadow-sm drop-shadow-2xl">
          <p className="p-4 text-lg">
            Hello! My name is Mark Protsyuk and I am a Software Engineer from
            Sacramento, CA! I am a recent UC Davis Bootcamp graduate. I have had
            some local intern experience and now I am excited to work in a
            professional enviornment. You can view some of the projects I have
            worked on below.
          </p>
          <p className="p-4 text-lg">
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
      <div className="flex flex-col justify-center items-center gap-4 border rounded-md border-slate-500 p-2 m-4 mb-8 bg-white w-96 md:w-auto drop-shadow-2xl">
        <p className="text-xl">My Skills and Certification</p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Image
            width={400}
            height={400}
            alt="Davis certification"
            src="/images/daviscertification.png"
            className="p-2 drop-shadow-lg"
          />
          <div className="flex grid grid-cols-3 gap-4 justify-center items-center p-2 ml-6 m-6">
            <Image
              width={100}
              height={1}
              alt="Davis certification"
              src="/images/js.png"
              className="p-2 drop-shadow-lg"
            />
            <Image
              width={100}
              height={1}
              alt="Davis certification"
              src="/images/nodejs.png"
              className="p-2 drop-shadow-lg"
            />
            <Image
              width={100}
              height={1}
              alt="Davis certification"
              src="/images/react.png"
              className="p-2 drop-shadow-lg"
            />
            <Image
              width={100}
              height={1}
              alt="Davis certification"
              src="/images/mongodb.png"
              className="p-2 drop-shadow-lg"
            />
            <Image
              width={100}
              height={1}
              alt="Davis certification"
              src="/images/express.png"
              className="p-2 drop-shadow-lg"
            />
            <Image
              width={100}
              height={1}
              alt="Davis certification"
              src="/images/tailwind.png"
              className="p-2 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
