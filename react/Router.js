let navProps = {
    params: {},
    currentUri: null
};

function getRightItem(items, path){
    try{
        let result = items.find(it => path.startsWith(it.path));
        while(result?.exact && result.path !== path){
            items = items.filter(i => it.path !== result.path );
            result = items.find(it => it.path.startsWith(path));
        }
        if( !result?.exact && result.path !== path){
            let extraUri = path.substr(result.path.length, path.length - result.path.length);
            navProps.params.extraUri = extraUri;
        }
        return result;
    }catch(e){
        console.error(e);
        return null;
    }
    
}
 
function Router(items){
    navProps.currentUri = window.location.hash;
    const path = window.location.hash.slice(1);
    
    items = items.filter(it => it.path && it.component);
    let result;
    result = getRightItem(items, path);

    if(result){
        if(typeof result.component === 'function'){
            return new (result.component)(navProps);
        }else{
            return result.component;
        }
    }

    return new (items[0].component)(navProps);
};

export default Router;

