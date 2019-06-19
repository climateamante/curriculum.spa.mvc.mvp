define(function(){
      App.prototype.user.uid = function(){
      try{
            if( firebase.auth().currentUser !== null ){
                  return firebase.auth().currentUser.uid;
         }
      }catch(e){}
            return false;
      }();

      return App.prototype.user.uid;


});
