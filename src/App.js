import './App.css';
import Footer from './common/Footer';
import Hero from './components/Hero';
import KeyFaq from './components/KeyFaq';
import KeyWork from './components/KeyWork';

function App() {
  return (
    <div>
      <Hero />
      <KeyWork />
      <KeyFaq />
      <Footer/>
    </div>
  );
}

export default App;
