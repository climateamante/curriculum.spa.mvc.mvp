define(function(require){

  // Instantiates the entire application. Everything is an extension of app.

  var App = (function(){
    var self = this;
    if (!(this instanceof App) ){
       return new App();
    }

    return App;
    
  })();

  return App;

});
