import renderer from './functions/renderer.js';

class Component{
    props = {};

    constructor(props){
        
    };
    
    display = function(newProps){
        if(this.shouldUpdate(newProps)){
            return this.render();
        }
    };

    shouldUpdate = function(newProps){
        let tmpProps = Object.create(props);
        Object.assign(tmpProps, newProps);
        if( JSON.stringify(tmpProps) !== JSON.stringify(props) ){
          return true;
        }else{
            return false;
        }
    };

    toRender = () => {};

    render = () => {
        return renderer(this.toRender());
    }

};

//Component.prototype.render = render;

export default Component;