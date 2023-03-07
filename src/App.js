import './App.css';
import About from './components/About Me';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Why from './components/Why';
import Work from './components/Work';
import { LanguageProvider } from './langues/langues';
import Selector from './langues/Selector';
import { Text } from './langues/Text';

function App() {
  return <LanguageProvider>
    <Header></Header>
    <Home></Home>
    <About></About>
    <Why></Why>
    <Work></Work>
    <Services></Services>
    <Contact></Contact>
    <div className='footer'>
      <p className='footer_text'>
        <Text tid="footer" i={-1} />
      </p>
      <Selector />
    </div>
  </LanguageProvider>
}

export default App;
