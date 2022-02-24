import './portfolio.css';
import About from "./components/About";
import Panel from "./components/Panel";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App text-center text-white bg-dark">
      <Panel />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
