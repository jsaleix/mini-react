import { Component } from '../../react/index.js';
import createElement from '../../react/functions/createElement.js';

class Header extends Component {
    constructor(){
      super();
      this.test = 1;
      this.state = { test: 1 }
    }
  
    maFn = () =>{
        this.setState({ test: this.state.test+1 });
    };

    toRender = () => {

      const li = createElement(
        'div', 
        null, 
        createElement('a', { attributes: { href: '#home'}}, 'HOME' ),
        createElement('a', { attributes: { href: '#pokedex'}}, 'Pokedex' ),
        createElement('a', { attributes: { href: '#page2'}}, 'page 2' )
      );

      const header = createElement(
        'div', 
        { attributes: {id: 'header'}},
        createElement('h1', null, 'SITE'),
        li
      );
      return header;
    };
  
  }
  
  export default new Header();