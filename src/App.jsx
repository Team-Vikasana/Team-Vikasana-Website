import Contact from "./components/Contact";
import Divisions from "./components/Divisions";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div className="h-screen w-screen sm:no-scrollbar overflow-y-scroll">
    <Portfolio />
    <Divisions />
    <Contact />
    </div>
  );
}

export default App;