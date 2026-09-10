import "./App.css";
import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";
import Header from "./components/header/header";
import Nav from "./components/navigation/navigation";
import Project from "./components/project/project";
import Skills from "./components/skills/skills";
import Social from "./components/social/social";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Social />
      <Skills />
      <Project />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
