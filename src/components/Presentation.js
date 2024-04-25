import '../styles/style.css'

function Presentation({src='', text=''}) {
    return (
        <div className='presentation-container'>
            <div className='presentation'>
                <img src={src} alt='falaise avec la mer' className='imgBanner' />
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default Presentation