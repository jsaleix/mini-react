import { Component, CreateElement } from '../../react/index.js';

const PKM_DEF_PICTURE = "https://naramsim.github.io/Colosseum/images/pokemons/";

class PkmItem extends Component {
    constructor(props){
        super(props);
    }

    getImg = () => {
        return `${PKM_DEF_PICTURE}${this.props.pkm.id}.svg`;
    }

    select = () => {
        if(this.props.selected !== this.props.pkm.id){
            this.props.select(this.props.pkm.id)
        }else{
            this.props.select(null)
        }
    }

    toRender = () => {
        if(!this.props.pkm) return;
        const img = CreateElement('img', {src: this.getImg()});
        const name = CreateElement('h3', null, "{{ this.props.pkm.name }}".interpolate(this));

        const div = CreateElement('div', 
                    {
                        class: 'pkm-item',
                        style: this.props.selected === this.props.pkm.id && 'border: 1px solid red',
                        onclick: this.select
                    }, 
                    img,
                    name,
                    (this.props.selected === this.props.pkm.id) &&
                    CreateElement('button', { onClick: () => window.location.href = (`#pkm/${this.props.pkm.id}`)}, 'Visit')
        );
        return div;
    }

};

export default PkmItem;