import MenuDropDownText from './MenuDropDownText';
import '../styles/style.css'
import { useState, useEffect } from 'react';

export default function InfosPropos() {

    useEffect(() => {
     document.title = 'A Propos - Kasa';
      },[]);
    

    const [ fiabiliteDisplayed, setFiabiliteDisplayed ] = useState(false);
    const [ respectDisplayed, setRespectDisplayed ] = useState(false);
    const [ serviceDisplayed, setServiceDisplayed ] = useState(false);
    const [ securiteDisplayed, setSecuriteDisplayed ] = useState(false);

    const ToggleFiabilite = () => {
        setFiabiliteDisplayed(!fiabiliteDisplayed);
        const chevronFiabilite = document.querySelector('.fiabilite .fa-chevron-up');
        if ( !fiabiliteDisplayed ) {
            chevronFiabilite.style.transform = 'rotate(-180deg)';
        }
        else
        {
            chevronFiabilite.style.transform = '';
        };
    }

    const ToggleRespect = () => {
        setRespectDisplayed(!respectDisplayed);
        const chevronRespect = document.querySelector('.respect .fa-chevron-up');
        if ( !respectDisplayed ) {
            chevronRespect.style.transform = 'rotate(-180deg)';
        }
        else
        {
            chevronRespect.style.transform = '';
        };
    }

    const ToggleService = () => {
        setServiceDisplayed(!serviceDisplayed);
        const chevronService = document.querySelector('.service .fa-chevron-up');
        if ( !serviceDisplayed ) {
            chevronService.style.transform = 'rotate(-180deg)';
        }
        else
        {
            chevronService.style.transform = '';
        };
    }

    const ToggleSecurite = () => {
        setSecuriteDisplayed(!securiteDisplayed);
        const chevronSecurite = document.querySelector('.securite .fa-chevron-up');
        if ( !securiteDisplayed ) {
            chevronSecurite.style.transform = 'rotate(-180deg)';
        }
        else
        {
            chevronSecurite.style.transform = '';
        };
    }


  return (
    <div className='MenuDropDownPropos'>
        <div className='fiabilite'>
            <button>
                <p>Fiabilité</p>
                <i onClick={ToggleFiabilite} className="fa-solid fa-chevron-up"></i>
            </button>
            <div className='fiabilite-content'>
            {
                fiabiliteDisplayed &&
                <MenuDropDownText content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'/>
            }
            </div>
        </div>
        <div className='respect'>
            <button>
                <p>Respect</p>
                <i onClick={ToggleRespect} className="fa-solid fa-chevron-up"></i>
            </button>
            <div className='respect-content'>
            {
                respectDisplayed &&
                <MenuDropDownText content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.'/>
            }
            </div>
        </div>
        <div className='service'>
            <button>
                <p>Service</p>
                <i onClick={ToggleService} className="fa-solid fa-chevron-up"></i>
            </button>
            <div className='service-content'>
            {
                serviceDisplayed &&
                <MenuDropDownText content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.'/>
            }
            </div>
        </div>
        <div className='securite'>
            <button>
                <p>Sécurité</p>
                <i onClick={ToggleSecurite} className="fa-solid fa-chevron-up"></i>
            </button>
            <div className='securite-content'>
            {
                securiteDisplayed &&
                <MenuDropDownText content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            }
            </div>
        </div>
    </div>
  )
}
