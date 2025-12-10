import Welcome from '../components/Welcome'
import JayStackCard from '../components/JayStackCard'
import JayFontsCard from '../components/JayFontsCard'
import Footer from '../components/Footer'
import HomeInfo from '../components/HomeInfo'

export default function Home() {
    return (
       <div>
       
       <Welcome />
       <HomeInfo />
       <JayStackCard/>
       <JayFontsCard/>
       <Footer />
       </div>
    );
}