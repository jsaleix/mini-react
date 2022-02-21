import { Component } from '../../react/index.js';
import createElement from '../../react/functions/createElement.js';

class Header extends Component {
    constructor(){
      super();
      this.test = 1;
    }
  
    maFn = () =>{
        //alert('clicked');
        this.test = this.test+1;
        this.rerender();
    };

    toRender = () => {
        /*let div = document.createElement('div');
        div.appendChild(document.createTextNode('header here'));
        return div;*/
        const div = createElement('div', 
        { attributes: {id: 'header'}},
        createElement('h2', { 'onClick': this.maFn}, this.test),
        createElement('h1', null, 'SITE'),
        createElement('a', { attributes: { href: '#home'}}, 'HOME' ),
        createElement('a', { attributes: { href: '#page2'}}, 'page 2' )
        );
        return div;
    };
  
  }
  
  export default new Header();