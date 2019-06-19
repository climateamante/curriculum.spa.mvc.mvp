define(function(){

  // Function for adding a new key/value pair to the currently logged in user.

  App.prototype.controller.user.input = function(){

    require([
        'framework/app.view.user.input',
    ],function(html_data){

      var app_user_data_input_container = App.prototype.util.element
        .get('app-user-data-input-container');


        App.prototype.util.mutation(
          app_user_data_input_container,
          'watch',
          'app-user-data-form',
          function(){

              App.prototype.util.element.get('app-user-data-form')
              .addEventListener('submit', function(event){
                     event.preventDefault();
                     var input_key = this[0].value;
                     var input_value = this[1].value;
                     var user_uid = firebase.auth().currentUser.uid;

                     var input_data = {};
                     input_data[input_key] = input_value;


                     var firebase_url = 'users/'+user_uid+'/';

                     firebase.database().ref(firebase_url).update(input_data).then(
                       function(){
                         App.prototype.util.element
                         .get('app-user-data-dropdown-container')
                         .innerHTML =   App.prototype.controller.user.data_dropdown();
                         }
                    );
                     console.log(event);
                     this[0].value = '';
                     this[1].value = '';




                 }, false);
            }

        );

        // firbase.database().ref('users').child('uid_1').update(
        // {
        //     email: 'c@c.com'
        // });

        App.prototype.user.view = '';
        App.prototype.user.view = html_data;
        App.prototype.util.element
        .get('app-user-data-input-container').textContent = '';
        App.prototype.util.element
        .get('app-user-data-input-container').insertAdjacentHTML( 'beforeend', html_data );




        // <!-- beforebegin -->
        // <p>
        //   <!-- afterbegin -->
        //   foo
        //   <!-- beforeend -->
        // </p>
        // <!-- afterend -->
        //

        // App.prototype.util.element
        // .get('app-user-data-input-container').innerHTML = function(){
        //
        //   return html_data;
        //
        // };


    });

  };

  return {
      app_controller_user_input : App.prototype.controller.user.input
  };

});
