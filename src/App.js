import './App.css';
import Footer from './common/Footer';
import DataSecurity from './components/DataSecurity';
import HeadlessSearch from './components/HeadlessSearch';
import Hero from './components/Hero';
import KeyApi from './components/KeyApi';
import KeyFaq from './components/KeyFaq';
import KeyForm from './components/KeyForm';
import KeyWork from './components/KeyWork';

function App() {
  return (
    <div>
      <Hero />
      <KeyWork />
      <KeyApi/>
      <KeyFaq />
      <HeadlessSearch />
      <DataSecurity/>
      <KeyForm/>
      <Footer/>
    </div>
  );
}

export default App;
