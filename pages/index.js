import Hero from "../components/Hero";
import About from "./about";

export default function Home() {
  return (
    <div>
      <Hero />
      <About id="#about" />
    </div>
  );
}
