import render from './functions/render.js';

function Component(props){
    var props = {};

    this.display = function(newProps){
        if(this.shouldUpdate(newProps)){
            this.render();
        }
    };

    this.shouldUpdate = function(newProps){
        let tmpProps = Object.create(props);
        Object.assign(tmpProps, newProps);
        if( JSON.stringify(tmpProps) !== JSON.stringify(props) ){
          return true;
        }else{
            return false;
        }
    };

};

Component.prototype.render = render;

export default Component;