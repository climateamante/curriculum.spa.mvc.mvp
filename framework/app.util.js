define(function(){

    // Function for instantiating util which contains several methods to use as utilities throughout the app.

     App.prototype.util = {
          constructor : App,
          d : function(){return 'app.util';}, 
     };

     return {
          app_util : App.prototype.util
     };

});
