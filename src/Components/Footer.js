import { Component } from '../../react/index.js';
import createElement from '../../react/functions/createElement.js';

class Footer extends Component {
    constructor(){
      super();
    }
  
    toRender = () => {
      let copyright = createElement('h3', null, '© All rights reserved');

      const div = createElement('div', 
        { attributes: {id: 'footer'}},
        copyright
      );
      return div;
    };
  
  }
  
  export default new Footer();