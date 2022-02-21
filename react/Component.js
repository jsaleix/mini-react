import renderer from './functions/renderer.js';

class Component{
    isRendered = false;
    props = {};
    node = null;

    constructor(props){
        
    };
    
    setNode = node => this.node = node;

    display = function(newProps){
        if(!this.isRendered){
            //this.isRendered = true;
            return this.render();
        }else{
            if(this.shouldUpdate(newProps)){
                return this.render();
            }
        }
    };

    shouldUpdate = function(newProps){
        let tmpProps = Object.create(this.props);
        Object.assign(tmpProps, newProps);
        if( JSON.stringify(tmpProps) !== JSON.stringify(this.props) ){
          return true;
        }else{
            return false;
        }
    };

    rerender = () => {
        if(this.node){
            console.log(this.node.parentNode);
            this.node.replaceWith( this.render());
        }
    };

    toRender = () => {};

    renderer = renderer;

    render = () => {
        return this.renderer(this.toRender());
    }

};

//Component.prototype.render = render;

export default Component;