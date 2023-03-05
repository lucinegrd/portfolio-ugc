import './App.css';
import About from './components/About Me';
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
    </div>
}

export default App;
