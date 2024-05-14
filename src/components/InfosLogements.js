import logements from '../datas/logements.json'
import MenuDropDownText from './MenuDropDownText';
import MenuDropDownList from './MenuDropDownList';
import '../styles/style.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function InfosLogements() {

    const [ descriptionDisplayed, setDescriptionDisplayed ] = useState(false);
    const [ equipementsDisplayed, setEquipementsDisplayed ] = useState(false);

    const ToggleDescription = () => {
        setDescriptionDisplayed(!descriptionDisplayed);
        const chevronDescription = document.querySelector('.description .fa-chevron-up');
        if ( !descriptionDisplayed ) {
            chevronDescription.style.transform = 'rotate(-180deg)';
        }
        else
        {
            chevronDescription.style.transform = '';
        };
    }
    const ToggleEquipements = () => {
        setEquipementsDisplayed(!equipementsDisplayed);
        const chevronEquipement = document.querySelector('.equipements .fa-chevron-up');
        if ( !equipementsDisplayed ) {
            chevronEquipement.style.transform = 'rotate(-180deg)';
        }
        else
        {
            chevronEquipement.style.transform = '';
        };
    }

    let logementSelected = {
        "id": "",
        "title": "",
        "cover": "",
        "pictures": [
          "",
        ],
        "description": "",
        "host": {
          "name": "",
          "picture": ""
        },
        "rating": "",
        "location": "",
        "equipments": [
          ""
        ],
        "tags": [
          ""
        ]
      }; 
    let params = useParams();
    logements.forEach((logement) => {
        if (params.id === logement.id) {
            logementSelected = logement;
        }
    });

    useEffect(() => {
        document.title = logementSelected.title + ' - Kasa';
    },[]);

    const renderRating = () => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <i key={i} className={`fa-solid fa-star ${i < logementSelected.rating ? "pointRate" : ""}`}></i>
            );
        }
        return stars;
    };

  return (
<section className='infos'>
    <div className='infos-Container'>
        <h1>{logementSelected.title}</h1>
        <p>{logementSelected.location}</p>
        <div className='tags-container'>
            {(logementSelected.tags).map((tags) => (
                <p key={tags} className='tags'>{tags}</p>
            ))}
        </div>
        <div className='host'>
            <p>{logementSelected.host.name}</p>
            <img src={logementSelected.host.picture} alt={logementSelected.host.name} className='host-img' />
        </div>
        <div className='rating'>
        {renderRating()}
        </div>
        
    </div>
    <div className='MenuDropDown'>
        <div className='description'>
            <button>
                <p>Description</p>
                <i onClick={ToggleDescription} className="fa-solid fa-chevron-up"></i>
            </button>
            <div className='description-content'>
            {
                descriptionDisplayed &&
                <MenuDropDownText content={logementSelected.description}/>
            }
            </div>
        </div>
        <div className='equipements'>
            <button>
                <p>Equipements</p>
                <i onClick={ToggleEquipements} className="fa-solid fa-chevron-up"></i>
            </button>
            <div className='equipements-content'>
            {
                equipementsDisplayed &&
                <MenuDropDownList content={logementSelected.equipments}/>
            }
            </div>
        </div>
    </div>
</section>
    
  )
}
