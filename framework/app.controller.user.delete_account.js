define(function(){

    // Function for deleting the currently logged in user. Also deletes the selected users information from the firebase database.

    App.prototype.controller.user.delete_account = function() {
        
        require([
            'framework/app.view.user.delete.account.js'
        ],function(html_data){
            
            App.prototype.user.view = '';
            App.prototype.user.view = html_data;
          
            App.prototype.util.element
            .get('app-user-delete-container')
            .innerHTML = html_data;

            App.prototype.util.element
            .get('app-user-delete-form')
            .addEventListener('submit', function(event){
                event.preventDefault();
                var uid = App.prototype.util.element.get('app-user-list-users-dropdown-container').value;
                var user = firebase.auth().currentUser;

                user.delete()
                .then(function (){
                    var ref = firebase.database().ref("users/".concat(user.uid, "/"));
                    ref.remove();
                })
                .then(function () {
                    console.log("user data removed");
                });                
            })
        });

    return {
        app_controller_user_delete_account : App.prototype.controller.user.delete_account
    };


    };

});

