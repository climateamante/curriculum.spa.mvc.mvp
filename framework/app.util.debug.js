define(function(){

    // Function for debugging.

    App.prototype.util.debug = function(){

        return this.d();

    };


    return {
      app_util_debug : App.prototype.util.debug
    };

});
