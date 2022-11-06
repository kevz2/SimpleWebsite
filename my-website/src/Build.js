import React from "react";
import "./Build.css";
import Header from "./Header";
import Weapon from "./Weapon";
import Button from "./Button";


function Build(comps) {

    return (
        <div className="build">
            <Header/>
            <Button/>
            <p className="vigor">{comps.vigor}</p>
            <p className="attunement">{comps.attunement}</p>
            <p className="endurance">{comps.endurance}</p>
            <p className="vitality">{comps.vitality}</p>
            <p className="strength">{comps.strength}</p>
            <p className="dexterity">{comps.dexterity}</p>
            <p className="intelligence">{comps.intelligence}</p>
            <p className="faith">{comps.faith}</p>
            <p className="luck">{comps.luck}</p>
            <p className="description">{comps.description}</p>
            <div className="weapon_array">
                <Weapon
                weapon_link = {comps.weapon_link_1}
                weapon_image = {comps.weapon_image_1}
                weapon_name = {comps.weapon_name_1}
                />

                <Weapon     
                weapon_link = {comps.weapon_link_2}
                weapon_image = {comps.weapon_image_2}
                weapon_name = {comps.weapon_name_2}
                />
            </div>
        </div>
    )

}


export default Build