import logements from '../datas/logements.json'
import arrowLeft from '../assets/arrow_left.png'
import arrowRight from '../assets/arrow_right.png'
import logo from '../assets/LOGO.png'
import { useParams } from 'react-router-dom'

export default function Carrousel() {

    let imgCarrousel = 0;
    const params = useParams();
    {logements.map((logement) => {
        if (params.id === logement.id) {
        imgCarrousel = logement.pictures;
        };
    }
    )}

    const buttons = document.querySelectorAll(".arrow");
    let slide = document.querySelector(".carrousel-img");

    let slideActive = 0;
    let imgNumber = 1;

    buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        slideActive += (e.target.id === "next" ? 1 : -1);
        slideActive = (slideActive + imgCarrousel.length) % imgCarrousel.length;
        slide.src = imgCarrousel[slideActive];
        let imgNumber = slideActive + 1;
        console.log(imgNumber);
        console.log("click");
        });
    });
  return (
    <div>
    <img className="carrousel-img" src={imgCarrousel[0]} alt="Logements"/>
		<img className="arrow arrow_left" id="prev" src={arrowLeft} alt="Flèche gauche"/>
		<img className="arrow arrow_right" id="next" src={arrowRight} alt="Flèche droite"/>
		<div className="dots">
            <p>{imgNumber}/{imgCarrousel.length}</p>
	    </div>
    </div>
  )
}
