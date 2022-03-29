import renderer from './functions/renderer.js';
import prop_access from './functions/prop_access.js';
import string_interpolate from './functions/string_interpolate.js';

class Component{
    hasRendered = false;
    props = {};
    state = {};
    node = null;
    useEffects = {};

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
        
        if(Object.keys(this.useEffects).length > 0 ){
            this.checkUseEffects(oldState);
        }
    };

    display = (newProps) => {
        if(!this.hasRendered){
            return this.render();
        }else{
            if(this.shouldUpdate(newProps)){
                return this.render();
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

    /*
    *   this.useEffects format:
    *   this.useEffects = {
    *       "this.state.myDependency": [ fn1, fn2, fn3...]
    *   }
    */
    useEffect = (fn, dependencies) => {
        for(let dependency of dependencies){
            dependency = dependency.replace('this.state.', "");
            let dependencyFns = this.useEffects[dependency] || [];
            dependencyFns = [...dependencyFns, fn];
            this.useEffects = { ...this.useEffects, [dependency]: dependencyFns }
        }
    };

    checkUseEffects = (oldState) => {
        for (const [key, value] of Object.entries(this.useEffects)) {
            if(oldState[key] !== this.state[key]){
                for(let fn of value){
                    fn();
                }
            }
        }
    }

    componentDidMount = () => {}; // Called once when the component is created

    componentDidUpdate = () => {}; //Called each time the state is updated

    toRender = () => {}; // What the component must render

    renderer = renderer;

    render = () => {
        if(!this.hasRendered){
            this.hasRendered = true;
            this.componentDidMount();
        }else{
            this.componentDidUpdate();
        }
        return this.renderer(this.toRender());
    }

};

export default Component;