import { Component, CreateElement } from "../../react/index.js";

class PkmPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            pkmId: null,
            pkm: null,
        }
    }

    getPkmData = async () => {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pkmId}`)
                .then( res => res.json())
                .catch(e => console.error(e));
        let { name, sprites, types } = res;
        types = types.map( type => type.type.name);
        this.setState({ pkm: {name, sprites, types} });
        console.log(this.state.pkm)
    };

    getId(){
        try{
            let param = this.props.params.extraUri;
            if(!param) throw new Error('Missing pkm id');
            param = param.split('/')[1];
            if( isNaN(param) ) throw new Error('Invalid index');
            this.setState({ pkmId: param });
            console.log('updated')
            this.getPkmData();
        }catch(e){
            alert(e.message);
        }
    }

    componentDidMount = () => {
        this.getId();
        this.useEffect(async ()=>{
            await this.getPkmData();
        }, ['this.state.pkmId']);
    };
    
    pkmContent = () => {
        if( !this.state.pkm ) return;
        const imgs = Object.values(this.state.pkm.sprites).map( sprite => typeof sprite === 'string' && CreateElement('img', { src: sprite } ) );
        const imgDiv = CreateElement('div', { class: "pkmImg"}, ...imgs);

        const types = this.state.pkm.types.map( type => CreateElement('button', { class: 'type-item'}, type));
        const typesDiv = CreateElement('div', { class: "typesDiv"}, ...types);

        const pkmContent = CreateElement('div', null, 
        CreateElement(
            'h2', 
            null, 
            `${this.state.pkmId} - ${this.state.pkm.name}`),
            imgDiv,
            typesDiv
        );
        return pkmContent;
    }

    toRender = () => {
        const page = CreateElement(
            'div', 
            { id: 'pkm-page', class: 'container' },
            CreateElement('h1', null, 'POKEMON DATA '),
            this.pkmContent(),
        );
        return page; 
    }

}

export default PkmPage;