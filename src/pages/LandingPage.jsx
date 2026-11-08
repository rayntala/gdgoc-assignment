import Hero from './LandPage/Landing'; 
import FeatureBar from './LandPage/FeatureBar';
import Info from './LandPage/Info';
import Tracks from './LandPage/Tracks';
import Method from './LandPage/Method';  
import Project from './LandPage/Project';
import Steps from './LandPage/Steps';
import Banner from './LandPage/Banner';
import FAQ from './LandPage/FAQ';
import CTA from './LandPage/CTA';

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <FeatureBar />
      <Info />
      <Tracks />
      <Method />
      <Project />
      <Steps />
      <Banner />
      <FAQ />
      <CTA />
    </main>
  );
};

export default LandingPage;