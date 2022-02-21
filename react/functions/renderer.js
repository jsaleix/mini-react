function renderer(elem){
    if(!elem) return;

    let { type, props, children } = elem;
    let element = document.createElement(type);

    if(this !== undefined){
        this.node = element;
    }

    if(props?.attributes){
        for (const [key, value] of Object.entries(props.attributes)) {
            element.setAttribute(key, value);
        }
    }

    if(props){
        for(const [key, value] of Object.entries(props)){
            if(typeof value === 'function' && key.startsWith('on')){
                let event = key.replace(/^on/, "").toLowerCase();
                element.addEventListener( event, value);
            }
        }
    }

    
    if(children){
        for(let child of children){
            let childElem = null;
            switch(typeof child){
                case 'string':
                case 'number':
                    childElem = document.createTextNode(child);
                    break;
                    
                case 'object':
                    if(child.render !== undefined && typeof child.render === 'function'){
                        childElem = child.render();
                    }else{
                        childElem = renderer(child);
                    }
                    break;

                case 'function': 
                    childElem = child.render();
            }
            element.appendChild(childElem);
        }
    }
    return element;
};

export default renderer;