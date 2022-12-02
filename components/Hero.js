import ReactTyped from "react-typed";

export default function Hero() {
  return (
    <div className="flex h-screen bg-fixed bg-center bg-cover custom-img">
      <div className="flex flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-black/50">
        <div className="text-white text-4xl sm:text-7xl">Mark Protsyuk</div>
        <div className="text-white text-xl sm:text-4xl">
          <ReactTyped
            strings={[
              "Full-Stack Developer",
              "Part-time Snowboarder",
              "Full-time Coffee Snob",
            ]}
            typeSpeed={80}
            backSpeed={70}
            loop
          />
        </div>
      </div>
    </div>
  );
}
