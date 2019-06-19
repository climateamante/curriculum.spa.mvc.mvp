define(function(){

  // Function for using mutation which detects changes before they are attached to the DOM.

  App.prototype.util.mutation = function(element,status,target,callback){

    var _domtree;
    var _config = {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    };

    if(status === 'clear'){
      try{
        _domtree.disconnect();
        console.log( 'cleared _domtree' );
      }
      catch(error){
          console.log(error);
      }
    }
    else if(status === 'watch'){


      _domtree = new MutationObserver(function(mutations){
          mutations.forEach(function(mutation) {

            for(var node in mutation.addedNodes){
              // console.log(node);
              // console.log(mutation.addedNodes[node]);
              // console.log(
              //   typeof( mutation.addedNodes[node] )
              // );

              if( mutation.addedNodes[node].id === target){

                        try{
                              callback();
                                _domtree.disconnect();
                                console.log( 'cleared _domtree' );
                        }
                        catch(error){
                          console.log( error );
                        }



              }
                    // try{
                    //   if(callback){
                    //       callback();
                    //   }
                    // }
                    // catch(error){
                    //   console.log( error );
                    // }
            }
            // console.log(mutation.type);
          });
      });

      _domtree.observe(element, _config);

    }


  };




  return{
      app_util_mutation : App.prototype.util.mutation
  };

});
