export default Object.prototype.prop_access = function(path){
    let obj = this;
    if(!path) return obj;
    if(!obj){ 
        console.log(path + ' do not exist.');
        return;
    }

    if(path.includes('this.') !== -1){
        path = path.replace('this.', '');
    }
    path = path.split('.');

    let curr = obj;
    for(let prop of path){
        if( !curr[prop] ){ 
            console.log(`${path.slice(0, path.indexOf(prop)+1).join('.')} not exist.`)
            return (`${path.slice(0, path.indexOf(prop)+1).join('.')} not exist.`); 
        }
        curr = curr[prop];
    }

    return curr;
}