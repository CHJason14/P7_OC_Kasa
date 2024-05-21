import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import LogementDetails from "./pages/LogementDetails";

function App() {

  return <div>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path="/:id"  element={<LogementDetails />} />
      <Route path="/NotFound"  element={<Error404 />}/>
      <Route path='/APropos' element={<InfoPage />}/>
      <Route path='*' element={<Error404 />}/>
    </Routes>
    <Footer />
  </div>
}

export default App