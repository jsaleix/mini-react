function Router(items){
    const path = window.location.hash.slice(1);
    let items = items.filter(it => it.path && it.component);
    let result;
    result = items.find(it => it.path === path);
    if(result) return result;
    return null;
};

export default Router;

