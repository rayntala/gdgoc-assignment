import Navbar from './components/Navbar';
import Hero from './pages/LandingPage/Landing';
import FeatureBar from './pages/LandingPage/FeatureBar';
import Info from './pages/LandingPage/Info';
import Tracks from './pages/LandingPage/Tracks';
import Method from './pages/LandingPage/Method';  
import Project from './pages/LandingPage/Project';
import Steps from './pages/LandingPage/Steps';
import Banner from './pages/LandingPage/Banner';
import FAQ from './pages/LandingPage/FAQ';
import CTA from './pages/LandingPage/CTA';
import Footer from './pages/LandingPage/Footer';
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureBar />
        <Info />
        <Tracks />
        <Method />
        <Project/>
        <Steps />
        <Banner />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;