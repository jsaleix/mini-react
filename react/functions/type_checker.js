function prop_access(obj, path){
    if(typeof obj !== 'object' ) throw new TypeError();
    if(!path) return obj;
    if(!obj){ 
        console.log(path + ' not exist.');
        return;
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
  
  function type_check_v1(variable, type) {
      if(variable === null ){
        if( type == 'null' ){
          return true;
        }else{
          return false;
        }
      }
      
      if( Array.isArray(variable) ){ 
        if(type == 'array') 
          return true;
        else
          return false;
      }
      console.log(typeof(variable) + ' === ' + type);
      console.log((typeof(variable) === type));
      return (typeof(variable) === type);
    }
    
    function type_check_v2(variable, conf) {
      if(typeof conf !== 'object'){ 
        return false;
      }
      
      if(!conf.type && !conf.value && !conf.enum ){ 
        return false;
      }
      
      if(conf.enum){
        if( !Array.isArray(conf.enum) || conf.enum.length < 0){
          return false;
        }
        
        for(let item of conf.enum){
          if( !type_check_v1(variable, item) ){ 
            return false;
          }
        }
      }
      
      if(conf.type){
        if( !type_check_v1(variable, conf.type) ){
          return false
        }else{
          console.log( typeof variable + ' is equal to ' + conf.type)
        }
      }
      
      if(conf.value){
        if(typeof variable == 'object' && typeof conf.value == 'object'){
          return (JSON.stringify(variable) == JSON.stringify(conf.value));
        }else{
          return ( (typeof variable === typeof conf.value) && (variable === conf.value) );
        }
      }
  
      return true;
    
  }
  
export default function type_check(variable, conf) {
    if( !type_check_v2(variable, conf ) ){
        return false;
    }

    if(conf.properties){ 
        if(typeof variable !== 'object') return false;

        let isOk = true;
        Object.keys(conf.properties).forEach((prop)=>{
        if(!prop_access(variable, prop) || !type_check_v2(variable[prop], conf.properties[prop])){
            isOk = false;
        }
        });
        return isOk;
    }else{
        return true;
    }
}
