import { Component } from '../../react/index.js';
import createElement from '../../react/functions/createElement.js';

class Footer extends Component {
    constructor(){
      super();
    }
  
    toRender = () => {
      let copyright = createElement('h3', null, '© MINI-REACT');

      const div = createElement('div', 
        { id: 'footer'} ,
        copyright
      );
      return div;
    };
  
  }
  
  export default new Footer();