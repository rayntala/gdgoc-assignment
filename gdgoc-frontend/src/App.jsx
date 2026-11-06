import Navbar from './components/Navbar';
import Hero from './pages/Landing';
import FeatureBar from './pages/FeatureBar';
import Info from './pages/Info';
import Tracks from './pages/Tracks';
import Method from './pages/Method';  
import Project from './pages/Project';
import Steps from './pages/Steps';
import Banner from './pages/Banner';
import FAQ from './pages/FAQ';
import CTA from './pages/CTA';
import Footer from './pages/Footer';
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