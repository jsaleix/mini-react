import { Component, CreateElement } from '../../react/index.js';
import PkmItem from '../Components/PkmItem.js';

class Pokedex extends Component {
  constructor(props){
    super(props);
    this.state = { 
      pkms: [], 
      test: 1,
      limit: 6,
      loading: true
    }
  }

  fetchPkm = async () => {
    let { limit } = this.state;
    this.setState({ loading: true });

    let res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=389`)
                .then( res => res.json())
                .catch(e => console.error(e));
    if(res?.results){
      let tmpList = this.state.pkms;
      tmpList = res.results.map( pkm => {
        let idPkm = (pkm.url).split("https://");
        idPkm     = (idPkm[1]).split("/")[4];
        return {name: pkm.name, id: idPkm}
      });

      setTimeout(() => {
        this.setState({ pkms: tmpList, loading: false });
      }, 500);
    }
  };

  results = () => {
    if(this.state.pkms){
      let pkms = this.state.pkms.map( p => new PkmItem({pkm: p}) );
      let main = CreateElement('div', { attributes: { class: 'pkm-content'}}, ...pkms);
      return main;
    }
  };

  componentDidUpdate = async () => {
    //await this.fetchPkm();
  };

  componentDidMount = async () => {
    document.title = "pokedex";
    await this.fetchPkm();

    this.useEffect(async() => {
        await this.fetchPkm();
    }, ['this.state.limit']);

  };

  updateTest = () => {
    this.setState({ test: this.state.test+1});
  }

  moreBtn = () => {
    if(this.state.loading) return CreateElement('span', null, 'Loading...');
    return CreateElement('button', {onclick: () => this.setState({ limit: this.state.limit+6})}, 'More' )
  };

  toRender = () => {

    const home = CreateElement(
      'div', 
      { attributes: {id: 'pokedex'}},
      CreateElement('h1', {'onclick': this.updateTest}, 'Pokedex'),
      this.results(),
      this.moreBtn()
    );
    return home;
  };
  
  }
  
  export default new Pokedex();