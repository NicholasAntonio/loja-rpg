import './App.css';
import Weapons from './components/weapons/weapons';
import Cyberwares from './components/cyberware/cyberware';
import HacksAndDaemons from './components/hacks/hacks';
import Logo from './components/logo/logo';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className='list-container'>
        <div className='div'>
          <h2>Armamento</h2>
      <Weapons  />
      </div>
      <div className='div'>
        <h2>Implantes</h2>
      <Cyberwares className='cyberwares-div' />
      </div>
      <div className='div'>
        <h2>Hacks</h2>
      <HacksAndDaemons className='hacks-div'/>
      </div>
      </div>
    </div>
  );
}

export default App;
