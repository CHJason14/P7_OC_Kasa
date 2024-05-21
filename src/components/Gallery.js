import '../styles/style.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Gallery({ logements }) {

    useEffect(() => {
        document.title = 'Accueil - Kasa';
         },[]);

    return (
        <section className='gallery'>
            {logements.map((logement) => (
                <Link to={"/"+logement.id} key={logement.id} className='card-logements'>
                    <img src={logement.cover} alt={logement.title} className='card-img'/>
                    <h3>{logement.title}</h3>
                </Link>
            ))}
        </section>
    )
}

export default Gallery