let navProps = {
    params: {},
    currentUri: null
};

/*function getPathWithParam(items, path){
    let checkItemsWithParams = items.filter(item => item.path.indexOf(':') !== -1 );
    if(checkItemsWithParams.length < 1) return null;

    let currPathLen = path.split('/').length;
    let itemsLength = checkItemsWithParams.filter( item => item.path.split('/').length === currPathLen );
    console.log(itemsLength);
}*/

function Router(items){
    navProps.currentUri = window.location.hash;
    const path = window.location.hash.slice(1);

    items = items.filter(it => it.path && it.component);
    let result;
    result = items.find(it => it.path === path);

    /*if(!result){
        //Checking using params
        result = getPathWithParam(items, path);
    }*/

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

