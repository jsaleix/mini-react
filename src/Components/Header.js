import { Component } from '../../react/index.js';
import createElement from '../../react/functions/createElement.js';

class Header extends Component {
    constructor(){
      super();
    }
  
    toRender = () => {
        /*let div = document.createElement('div');
        div.appendChild(document.createTextNode('header here'));
        return div;*/
        const div = createElement('div', 
        { attributes: {id: 'header'}},
        createElement('h1', null, 'SITE'),
        createElement('a', { attributes: { href: '#home'}}, 'HOME' ),
        createElement('a', { attributes: { href: '#page2'}}, 'page 2' )
        );
        return div;
    };
  
  }
  
  export default new Header();