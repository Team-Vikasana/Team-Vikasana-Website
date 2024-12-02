import Contact from "./components/Contact";
import Divisions from "./components/Divisions";
import Portfolio from "./components/Portfolio";
import FirstPage from './components/firstpg';
import SocialMedia from './components/SocialMedia.jsx'
import TeamsComp from './components/TeamsComp.jsx'
import TeamsHeaderComp from './components/TeamsHeaderComp.jsx'
import HeroPage from "./components/HeroPage.jsx";

const App = () => {
  return (
    <div className="h-screen w-screen no-scrollbar overflow-y-scroll">
      <HeroPage />
      <FirstPage />
      <Portfolio />
      <SocialMedia />
      <Divisions />
      <TeamsHeaderComp />
      <TeamsComp />
      <Contact />
    </div>
  );
}

export default App;
