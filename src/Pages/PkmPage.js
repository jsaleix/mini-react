import { Component, CreateElement } from "../../react/index.js";

class PkmPage extends Component {
    constructor(props){
        super(props);
    }

    toRender(){
        const page = CreateElement(
            'div', 
            { id: 'pkm-page' },
            );
        return page; 
    }

}

export default PkmPage;