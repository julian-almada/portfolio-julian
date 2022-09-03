import Menu from "./components/menu/Menu";
import Home from './components/home/Home'
import Abaut from './components/abaut/Abaut'

window.onscroll = function() {
  let posicion = window.pageXOffset || document.documentElement.scrollTop;

  let elemento1 = document.getElementById('heart');
  let elemento2 = document.getElementById('fire');

  elemento1.style.bottom = posicion * 0.1 + 'px';
  elemento2.style.top = posicion * 0.1 + 'px';
}

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <Abaut />
    </div>
  );
}

export default App;
