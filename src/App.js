import './App.css';
import About from './components/About Me';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return <div>
      <Header></Header>
      <Home></Home>
      <About></About>
      <div style={{height:'400px'}}>
        <p style={{color:'var(--red)'}}>à venir</p>
      </div>
    </div>
}

export default App;
