import './App.css';
import UrlPilkkominen from './components/teht6';
import NumeroVaihto from './components/teht7';
import OikeanpuolimmainenNumero from './components/teht8';
import YmpyräTarkistus from './components/teht9';
import BubbleSortCars from './components/teht10';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>-- TEHTÄVÄ 6 --</p>
        <UrlPilkkominen/>
        <p>-- TEHTÄVÄ 7 --</p>
        <NumeroVaihto/>
        <p>-- TEHTÄVÄ 8 --</p>
        <OikeanpuolimmainenNumero/>
        <p>-- TEHTÄVÄ 9 --</p>
        <YmpyräTarkistus/>
        <p>-- TEHTÄVÄ 10 --</p>
        <BubbleSortCars/>
      </header>
    </div>
  );
}

export default App;
