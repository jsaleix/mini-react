import renderer from './functions/renderer.js';

class Component{
    hasRendered = false;
    props = {};
    state = {};
    node = null;

    constructor(props){
        this.props=props;
    };
    
    setNode = node => this.node = node;

    setState = newState => {
        let oldState = this.state;
        this.state   = {...oldState, ...newState};
        if(this.shouldUpdateState(oldState, this.state)){
            this.rerender();
        }
    };

    display = (newProps) => {
        if(!this.hasRendered){
            this.hasRendered = true;
            return this.render();
        }else{
            if(this.shouldUpdate(newProps)){
                console.log('should')
                return this.render();
            }else{
                console.log('should not')
            }
        }
    };

    shouldUpdate = function(newProps){
        if(!newProps)return true;
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
        };
    };

    componentDidMount = () => {};

    toRender = () => {};

    renderer = renderer;

    render = () => {
        if(!this.hasRendered){
            this.componentDidMount();
        }
        return this.renderer(this.toRender());
    }

};

//Component.prototype.render = render;

export default Component;