import Navbar from './components/Navbar';
import Hero from './pages/Landing';
import FeatureBar from './pages/FeatureBar';

import Tracks from './pages/Tracks';
import Method from './pages/Method';  


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureBar />
        <Tracks />
        <Method />
        
      </main>
    </div>
  );
}

export default App;