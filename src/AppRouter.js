import createElement from '../react/functions/createElement.js';
import {Router, Component} from '../react/index.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Home from './Pages/Home.js';
import Pokedex from './Pages/Pokedex.js';
import PkmPage from './pages/PkmPage.js';

class AppRouter extends Component {
  constructor(){
    super();
  }

  toRender = () => {

    let paths = [
      {path: 'home', component: Home},
      {path: 'pokedex', component: Pokedex},
      {path: 'page1', component: createElement('div', null, 'Welcome')},
      {path: 'page2', component: createElement('div', null, 'page2')},
      {path: 'pkm', component: PkmPage}
    ];

    const div = createElement('div', 
      { id: 'main' },
      Header,
      Router(paths),
      Footer
    );
    return div;
  };

}

export default new AppRouter();