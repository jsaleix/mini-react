import { Component, CreateElement } from '../../react/index.js';

class Home extends Component {
    constructor(props){
      super(props);
      this.state = { counter: 1 }
    }
  
    incCounter = (e) =>{
      this.setState({ counter: this.state.counter+1 });
    };

    counterDiv = () => {
      const counterDiv = CreateElement('p', null, 'You clicked ' + this.state.counter + ' times');
      const clicker = CreateElement('button', { 'onClick': this.incCounter}, 'Click');

      return CreateElement( 'div', { attributes: {id: 'counter'}}, counterDiv, clicker);
    }

    toRender = () => {
      const home = CreateElement(
        'div', 
        { attributes: {id: 'homepage'}},
        CreateElement('h1', null, 'Welcome'),
        this.counterDiv()
      );
      return home;
    };
  
  }
  
  export default new Home();