import Dropdown from "./Dropdown";
import '../styles/style.css'
import { useState, useEffect } from 'react';

export default function InfosLogements({ logement }) {

    useEffect(() => {
        document.title = logement.title + ' - Kasa';
    },[]);

    const renderRating = () => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <i key={i} className={`fa-solid fa-star ${i < logement.rating ? "pointRate" : ""}`}></i>
            );
        }
        return stars;
    };

  return (
<section className='infos'>
    <div className='infos-Container'>
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <div className='tags-container'>
            {(logement.tags).map((tags) => (
                <p key={tags} className='tags'>{tags}</p>
            ))}
        </div>
        <div className='host'>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} className='host-img' />
        </div>
        <div className='rating'>
        {renderRating()}
        </div>

    </div>
    <div className='MenuDropDownLogement'>
        <div className="flex-column description">
        <Dropdown title={"Description"}>
              <p className="description-content">{logement.description}</p>
        </Dropdown>
        </div>
        <div className="flex-column equipements">
        <Dropdown title={"Equipements"}>
            <ul className="equipements-content">
                {logement.equipments.map((equipment) => (
                  <li key={equipment} className='list'>{equipment}</li>
                ))}
            </ul>
        </Dropdown>
    </div>
    </div>
</section>

  )
}
