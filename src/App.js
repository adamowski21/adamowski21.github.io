import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
