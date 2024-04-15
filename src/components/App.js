import Banner from './Banner'
import Presentation from './Presentation'
import Gallery from './Gallery'
import Footer from './Footer'
import Carrousel from './Carrousel'
import {Routes, Route} from "react-router-dom"

function App() {
    return <div>
        <Banner />
        <Routes>
            <Route path='/' element={<div><Presentation /><Gallery /></div>}/>
            <Route path='/:id' element={<div><Carrousel /></div>}/>
        </Routes>
        <Footer />
        </div>
}

export default App