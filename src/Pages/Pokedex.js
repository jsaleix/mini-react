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
      let tmpList = [];
      res.results.forEach.call(res.results, pkm => {
          let idPkm = (pkm.url).split("https://");
          idPkm     = (idPkm[1]).split("/")[4];
          let newPkm = {name: pkm.name, id: idPkm}
          tmpList.push(newPkm);
      });
      this.setState({ pkms: tmpList });
    }
  };

  pkmItem = () => {
    if(this.state.pkms){
      let pkms = this.state.pkms.map( p => new PkmItem({pkm: p}) );
      let main = CreateElement('div', { attributes: { class: 'pkm-content'}}, ...pkms);
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
      { attributes: {id: 'pokedex'}},
      CreateElement('h1', {'onclick': this.updateTest}, 'Pokedex'),
      this.pkmItem()
    );
    return home;
  };
  
  }
  
  export default new Pokedex();