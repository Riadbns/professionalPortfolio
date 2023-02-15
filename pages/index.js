import Certificate from "../components/Certificate";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Me from "../components/Me";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Portfolio />
      <Experience />
      <Certificate />
      <Me />
      <Contact />
    </div>
  );
}
