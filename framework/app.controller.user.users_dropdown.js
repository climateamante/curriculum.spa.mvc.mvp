define(function(){

    // Function for querying the firebase database for all users and loading them into an html dropdown.

    App.prototype.controller.user.users_dropdown = function(){

        var user_list = '';
        var user_uid = '';
        var firebase_url;
        var user_options;
        var user_current_option;

        var log = function(){
            console.log(this);
        };

        var get_firebase_query = function(){
                user_uid = firebase.auth().currentUser.uid;

                var query = firebase.database()
                .ref('users/');

                query.once('value')
                .then(
                  function(snapshot){

                      users =  snapshot.exportVal();
                      user_list +=
                      '<option value="" disabled="disabled" selected="selected">Please Select A User</option>';

                      for(var user in users ){
                          user_list +=
                          '<option class="app-option-user" id="app-option-'+ user +'"'+
                          'value="'+ user +'">'+
                                user+
                          '</option>';

                     }
                })
                .then(function(){

                    App.prototype.util.element
                    .get('app-user-list-users-dropdown-container')
                    .innerHTML = user_list;

                }).then(function(){
                    user_options = document.getElementsByClassName('app-option-user');
                    for(var option_value in user_options){

                        if(App.prototype.util.element.get(option_value)){
                        }
                    }
                });
        };



          require([
              'framework/app.view.user.users.dropdown.js',
          ],function(html_data){
              App.prototype.user.view = '';
              App.prototype.user.view = html_data;
              App.prototype.util.element
              .get('app-user-list-users-dropdown-container')
              .innerHTML = html_data;

              get_firebase_query();

            //    var target_dropdown = App.prototype.util.element
            //   .get('app-user-list-users-dropdown-container')
            //   .addEventListener('change',function(){
            //      user_current_option = App.prototype.util.element.get('app-user-list-users-dropdown-container').value;
            //      console.log(user_current_option);
            //     });

              });

    };

    return{
      app_controller_user_users_dropdown : App.prototype.controller.user.users_dropdown
    };

});