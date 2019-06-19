function process(key,value) {

    // Function for traversing through a full object tree with unknown number of key value pairs.

     if(typeof(value) == 'object'){
          console.log( key + ' : ' + 'object');
     }else{
          console.log( key + ' : ' + value);
     }
}
function traverse( object_to_traverse , callback_function ) {
    for (var item in object_to_traverse) {
        callback_function.apply(this,[ item , object_to_traverse [ item ]]);
        if ( object_to_traverse [ item ] !== null && typeof( object_to_traverse [ item ]) == 'object') {
            //going on step down in the object tree!!
            traverse( object_to_traverse [ item ],callback_function);
        }
    }
}