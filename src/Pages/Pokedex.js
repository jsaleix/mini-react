import { Component, CreateElement } from '../../react/index.js';
import PkmItem from '../Components/PkmItem.js';

class Pokedex extends Component {
  constructor(props){
    super(props);
    this.state = { pkms: [], test: 1 }
  }

  fetchPkm = async () => {
    let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6&offset=389')
                .then( res => res.json())
                .catch(e => console.error(e));
    if(res?.results){
      this.setState({ pkms: res.results });
    }
  };

  pkmItem = () => {
    if(this.state.pkms){
      let pkms = this.state.pkms.map( p => CreateElement('p', {attributes: {class: 'pkm-item'}}, p.name));
      let main = CreateElement('div', null, ...pkms);
      return main;
    }
  };

  componentDidMount = async () => {
    await this.fetchPkm();
  };

  updateTest = () => {
    this.setState({ test: this.state.test+1});
  }

  toRender = () => {
    const home = CreateElement(
      'div', 
      { attributes: {id: 'homepage'}},
      CreateElement('h1', {'onclick': this.updateTest}, 'Pokedex'),
      this.pkmItem(),
      new PkmItem({ test: this.state.test})
    );
    return home;
  };
  
  }
  
  export default new Pokedex();