import imgBanner from "../assets/IMG.png";
import Gallery from "../components/Gallery";
import Banner from "../components/Banner";
import logements from '../datas/logements.json'

export default function HomePage() {
  return <>
    <Banner src={imgBanner} text='Chez vous, partout et ailleurs' />
    <Gallery logements={logements} />
  </>
}