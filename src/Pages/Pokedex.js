import { Component, CreateElement } from '../../react/index.js';
import PkmItem from '../Components/PkmItem.js';

class Pokedex extends Component {
  constructor(props){
    super(props);
    this.state = { 
      pkms: [], 
      test: 1,
      limit: 6
    }
  }

  fetchPkm = async () => {
    let { limit } = this.state;
    console.log('fetch pkm');

    let res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=389`)
                .then( res => res.json())
                .catch(e => console.error(e));
    if(res?.results){
      let tmpList = [];
      tmpList = res.results.map( pkm => {
        let idPkm = (pkm.url).split("https://");
        idPkm     = (idPkm[1]).split("/")[4];
        return {name: pkm.name, id: idPkm}
      });
      console.log(tmpList)
      this.setState({ pkms: tmpList });
    }
  };

  results = () => {
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
      this.results(),
      CreateElement('button', {onclick: () => this.setState({ limit: this.state.limit+6})}, 'More' )
    );
    return home;
  };
  
  }
  
  export default new Pokedex();