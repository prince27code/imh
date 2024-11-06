import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;