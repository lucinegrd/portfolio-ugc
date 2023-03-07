import './App.css';
import About from './components/About Me';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Why from './components/Why';
import Work from './components/Work';

function App() {
  return <div>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Why></Why>
      <Work></Work>
      <Services></Services>
      <Contact></Contact>
      <div className='footer'>
        <p className='footer_text'>
          Ce site a été entièrement codé par mes soins.
        </p>

      </div>
    </div>
}

export default App;
