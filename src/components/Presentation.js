import '../styles/style.css'
import imgBanner from '../assets/IMG.png'

function Presentation() {
    return (
        <div className='presentation'>
            <img src={imgBanner} alt='falaise avec la mer' className='imgBanner' />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Presentation