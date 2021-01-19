
import './App.css';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className="App">
      <ParticlesBg type="circle" bg={true} />
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
