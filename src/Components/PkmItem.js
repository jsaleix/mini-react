import { Component, CreateElement } from '../../react/index.js';

const PKM_DEF_PICTURE = "https://naramsim.github.io/Colosseum/images/pokemons/";

class PkmItem extends Component {
    constructor(props){
        super(props);
    }

    getImg = () => {
        return `${PKM_DEF_PICTURE}${this.props.pkm.id}.svg`;
    }

    toRender = () => {
        if(!this.props.pkm) return;
        const img = CreateElement('img', {attributes:{src: this.getImg()}});
        const name = CreateElement('h3', null, this?.props?.pkm?.name);

        const div = CreateElement('div', {attributes: {class: 'pkm-item'}}, img, name);
        return div;
    }

};

export default PkmItem;