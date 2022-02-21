import { Component, CreateElement } from '../../react/index.js';

class PkmItem extends Component {
  constructor(props){
    super(props);
  }

  toRender = () => {
    return CreateElement('p', null, JSON.stringify(this?.props))
  }

};

export default PkmItem;