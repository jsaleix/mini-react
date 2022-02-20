function renderer(elem){
    //return this.toRender();
    if(!elem) return;
    let { type, props, children } = elem;
    let element = document.createElement(type);

    if(props?.attributes){
        for (const [key, value] of Object.entries(props.attributes)) {
            element.setAttribute(key, value);
        }
    }
    
    if(children){
        for(let child of children){
            let childElem = null;
            switch(typeof child){
                case 'string':
                    console.log('case 1')
                    childElem = document.createTextNode(child);
                    break;
                    
                case 'object':
                    console.log('case 2')
                    childElem = renderer(child);
                    break;

                case 'function': 
                console.log('case 3')
                    childElem = child.render();
            }
            /*if(typeof child === 'string'){
                childElem = document.createTextNode(child);
            }else{
                childElem = child.render();
            }*/
            element.appendChild(childElem);
        }
    }
    return element;
    return document.createTextNode('YO' + JSON.stringify(this.toRender));
};

export default renderer;