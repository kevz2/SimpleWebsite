import logo from './logo.svg';
import './App.css';
import Build from "./Build.js";
import Weapon from "./Weapon.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Build
        vigor = "Vigor: 40"
        attunement = "Attunement: 20"
        endurance = "Endurance: 40"
        vitality = "Vitality: 20"
        strength = "Strength: 20"
        dexterity = "Dexterity: 40"
        intelligence = "Intelligence: 40"
        faith = "Faith: 20"
        luck = "Luck: 12"
        description = "Sample build for style A"
        // weapon_array = {

        weapon_link_1 = {"https://darksouls.fandom.com/wiki/Gotthard_Twinswords"}
        weapon_image_1 = {"https://static.wikia.nocookie.net/darksouls/images/e/ea/Gotthard_Twinswords.png"}
        weapon_name_1 = "Gotthard Twinswords"

        weapon_link_2 = {"https://darksouls.fandom.com/wiki/Sellsword_Twinblades"}
        weapon_image_2 = {"https://static.wikia.nocookie.net/darksouls/images/8/82/Sellsword_Twinblades.png"}
        weapon_name_2 = "Sellsword Twinblades"

        // }
        />
        
      </header>
    </div>
  );
}

export default App;