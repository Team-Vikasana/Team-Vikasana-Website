import Contact from "./components/Contact";
import Divisions from "./components/Divisions";
import Portfolio from "./components/Portfolio";
import FirstPage from './components/firstpg';

const App = () => {
  return (
    <div className="h-screen w-screen sm:no-scrollbar overflow-y-scroll">
    <div className="bg-[#1E1E1E] min-w-screen min-h-screen h-fit p-5 text-white text-center flex flex-col items-center">
      <FirstPage />
    </div>
    <Portfolio />
    <Divisions />
    <Contact />
    </div>
  );
}

export default App;
