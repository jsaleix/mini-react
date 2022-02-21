import renderer from './functions/renderer.js';

class Component{
    isRendered = false;
    props = {};
    state = {};
    node = null;

    constructor(props){
        this.props=props;
    };
    
    setNode = node => this.node = node;

    setState = newState => {
        let oldState = this.state;
        this.state   = newState;
        if(this.shouldUpdateState(oldState, newState)){
            this.rerender();
        }
    };

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

    shouldUpdateState = function(oldState, newState){
        if( JSON.stringify(oldState) !== JSON.stringify(newState) ){
            return true;
        }else{
            return false;
        }
    };

    rerender = () => {
        if(this.node){
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