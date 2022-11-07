import logo from './logo.svg';
import './App.css';
import Build from "./Build.js";
import Weapon from "./Weapon.js";

import Thumbnail from './Thumbnail';
import Header from './Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/build1"><Thumbnail build_name="Dexterity Sample Build" /></Link>
            </li>
            <li>
              <Link to="/build2"><Thumbnail build_name="Quality Sample Build" /></Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/build1">
            <Build1 />
          </Route>
          <Route path="/build2">
            <Build2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <div className="home">
      <Header message="Dark Souls 3 Strategies" />
    </div>
  );
}

function Build1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Build
          title="Sample Build for Style A"
          vigor="Vigor: 40"
          attunement="Attunement: 20"
          endurance="Endurance: 40"
          vitality="Vitality: 20"
          strength="Strength: 20"
          dexterity="Dexterity: 40"
          intelligence="Intelligence: 40"
          faith="Faith: 20"
          luck="Luck: 12"
          description="This sample build focuses on dexterity and is for players who prefer weapons with faster attack speed."

          weapon_link_1={"https://darksouls.fandom.com/wiki/Gotthard_Twinswords"}
          weapon_image_1={"https://static.wikia.nocookie.net/darksouls/images/e/ea/Gotthard_Twinswords.png"}
          weapon_name_1="Gotthard Twinswords"

          weapon_link_2={"https://darksouls.fandom.com/wiki/Sellsword_Twinblades"}
          weapon_image_2={"https://static.wikia.nocookie.net/darksouls/images/8/82/Sellsword_Twinblades.png"}
          weapon_name_2="Sellsword Twinblades"
        />

      </header>
    </div>
  );
}

function Build2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Build
          title="Sample Build for Style B"
          vigor="Vigor: 40"
          attunement="Attunement: 20"
          endurance="Endurance: 40"
          vitality="Vitality: 30"
          strength="Strength: 40"
          dexterity="Dexterity: 20"
          intelligence="Intelligence: 20"
          faith="Faith: 20"
          luck="Luck: 12"
          description="This build is for players who prefer heavy-hitting weapons in exchange for slower attacks."

          weapon_link_1={"https://darksouls.fandom.com/wiki/Gael%27s_Greatsword"}
          weapon_image_1={"https://static.wikia.nocookie.net/darksouls/images/6/61/Gael%27s_Greatsword.png"}
          weapon_name_1="Gael's Greatsword"

          weapon_link_2={"https://darksouls.fandom.com/wiki/Twin_Princes%27_Greatsword"}
          weapon_image_2={"https://static.wikia.nocookie.net/darksouls/images/8/86/Twin_Princes%27_Greatsword.png"}
          weapon_name_2="Twin Princes' Greatsword"

        />

      </header>
    </div>
  );
}