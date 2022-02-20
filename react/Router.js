function Router(items){
    const path = window.location.hash.slice(1);
    items = items.filter(it => it.path && it.component);
    let result;
    result = items.find(it => it.path === path);
    if(result) return result.component;
    return items[0].component;
};

export default Router;

