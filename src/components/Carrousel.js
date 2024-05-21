import logements from '../datas/logements.json'
import arrowLeft from '../assets/arrow_left.png'
import arrowRight from '../assets/arrow_right.png'
import '../styles/style.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function Carrousel({ logement}) {
  const [imgNumber, setImgNumber] = useState(1);
  const [slideActive, setSlideActive] = useState(0);


    const carrouselOnClick = (direction) => {
      let newSlideActive = slideActive + direction;
      newSlideActive = (newSlideActive + logement.pictures.length) % logement.pictures.length;
      setSlideActive(newSlideActive);
      setImgNumber(newSlideActive + 1);
  };

  return (
    <div className='carrousel-container'>
      <div className='carrousel-content'>
        <img className="carrousel-img" src={logement.pictures[slideActive]} alt="Logements"/>
        {logement.pictures.length > 1 && <>
        <img onClick={() => carrouselOnClick(-1)} className="arrow arrow_left" id="prev" src={arrowLeft} alt="Flèche gauche"/>
        <img onClick={() => carrouselOnClick(1)} className="arrow arrow_right" id="next" src={arrowRight} alt="Flèche droite"/>
        <div className="compteur">
          <p id='compteur'>{imgNumber}/{logement.pictures.length}</p>
        </div>
        </>}
      </div>
    </div>
  )
}
