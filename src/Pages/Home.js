import { Component, CreateElement } from '../../react/index.js';

class Home extends Component {
    constructor(props){
      super(props);
      this.state = { counter: 0 }
    }
  
    incCounter = (e) =>{
      this.setState({ counter: this.state.counter+1 });
    };

    counterDiv = () => {
      const counterDiv = CreateElement('p', null, 'You clicked ' + this.state.counter + ' times');
      const clicker = CreateElement('button', { 'onClick': this.incCounter}, 'Click');

      return CreateElement( 'div', { id: 'counter' }, counterDiv, clicker);
    }

    part1 = () => {
      const title = CreateElement('h2', null, 'React');
      const subTitle = CreateElement('p', null, 'A JavaScript library for building user interfaces');
      const container = CreateElement('div', null,title, subTitle)
      return CreateElement('div', {class: 'part-1'}, container);
    };

    toRender = () => {
      const home = CreateElement(
        'div', 
        { id: 'homepage' },
        this.part1(),
        this.counterDiv()
      );
      return home;
    };
  
  }
  
  export default new Home();