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
      <Weapons  />
      <Cyberwares className='cyberwares-div' />
      <HacksAndDaemons className='hacks-div'/>
      </div>
    </div>
  );
}

export default App;
