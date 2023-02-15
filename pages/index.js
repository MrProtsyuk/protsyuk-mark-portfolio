import Hero from "../components/Hero";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
