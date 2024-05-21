import Dropdown from "./Dropdown";
import "../styles/style.css";
import {  useEffect } from "react";

export default function InfosPropos() {

  useEffect(() => {
    document.title = "A Propos - Kasa";
  }, []);

  return (
    <div className="MenuDropDownPropos">
      <Dropdown title="Fiabilité" className="dropdown-container">
        <p className="dropdown-content">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et
          toutes les informations sont régulièrement vérifiées par nos équipes.</p>
      </Dropdown>
      <Dropdown title="Respect" className="dropdown-container">
        <p className="dropdown-content">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
          perturbation du voisinage entrainera une exclusion de notre plateforme</p>
      </Dropdown>
      <Dropdown title="Service" className="dropdown-container">
        <p className="dropdown-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dicta dolores dolorum excepturi,
          mollitia porro possimus quia quis recusandae.
        </p>
      </Dropdown>
      <Dropdown title="Sécurité" className="dropdown-container">
        <p className="dropdown-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur cum deleniti ex exercitationem
          fugiat odit officiis ratione reiciendis veniam.</p>
      </Dropdown>
    </div>
  )
    ;
}
