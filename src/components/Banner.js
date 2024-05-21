import '../styles/style.css'

function Banner({src='', text=''}) {
    return (
        <div className='banner-container'>
            <div className='banner'>
                <img src={src} alt='falaise avec la mer' className='imgBanner' />
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default Banner