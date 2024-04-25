import Banner from './Banner'
import Presentation from './Presentation'
import Gallery from './Gallery'
import Footer from './Footer'
import Carrousel from './Carrousel'
import InfosLogements from './InfosLogements'
import InfosPropos from './InfosPropos'
import {Routes, Route} from "react-router-dom"
import imgBanner from '../assets/IMG.png'
import imgPropos from '../assets/img-2.png'
import NotFound from './NotFound'
import Error404 from './Error404'

function App() {

    return <div>
        <Banner />
        <Routes>
            <Route path='/' element={<div><Presentation src={imgBanner} text='Chez vous, partout et ailleurs' /><Gallery /></div>}/>
            <Route path="/:id"  element={<div><NotFound /><Carrousel /><InfosLogements /></div>}/>
            <Route path="/NotFound"  element={<div><Error404 /></div>}/>
            <Route path='/APropos' element={<div><Presentation src={imgPropos} /><InfosPropos /></div>}/>
            <Route path='*' element={<div><Error404 /></div>}/>
        </Routes>
        <Footer />
        </div>
}

export default App