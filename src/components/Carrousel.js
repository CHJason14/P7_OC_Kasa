import logements from '../datas/logements.json'
import arrowLeft from '../assets/arrow_left.png'
import arrowRight from '../assets/arrow_right.png'
import '../styles/style.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function Carrousel() {

  const [imgNumber, setImgNumber] = useState(1);
  const [slideActive, setSlideActive] = useState(0);

    let imgCarrousel = 0;
    let params = useParams();
    logements.forEach((logement) => {
        if (params.id === logement.id) {
            imgCarrousel = logement.pictures;
        };
    });

    const carrouselOnClick = (e) => {
      let newSlideActive = slideActive + (e.target.id === "next" ? 1 : -1);
      newSlideActive = (newSlideActive + imgCarrousel.length) % imgCarrousel.length;
      setSlideActive(newSlideActive);
      setImgNumber(newSlideActive + 1);
  };

  return (
    <div className='carrousel-container'>
      <div className='carrousel-content'>
        <img className="carrousel-img" src={imgCarrousel[slideActive]} alt="Logements"/>
        <img onClick={carrouselOnClick} className="arrow arrow_left" id="prev" src={arrowLeft} alt="Flèche gauche"/>
        <img onClick={carrouselOnClick} className="arrow arrow_right" id="next" src={arrowRight} alt="Flèche droite"/>
        <div className="compteur">
          <p id='compteur'>{imgNumber}/{imgCarrousel.length}</p>
        </div>
      </div>
    </div>
  )
}
