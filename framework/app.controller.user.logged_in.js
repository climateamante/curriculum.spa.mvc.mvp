define(function(){

    // Loads the logged in view and calls all necessary controllers for the logged in view.

    App.prototype.controller.user.logged_in = function(success){

      App.prototype.util.element.get('app-error-message').textContent = 'none';
      App.prototype.util.element.get('app-current-status').textContent = App.prototype.user.status;
      App.prototype.user.email = success.email;

      document.getElementById('app-current-user').textContent = App.prototype.user.email;


      require([
            'framework/app.view.user.logged.in',

            //call controllers for a logged in user
            'framework/app.controller.user.data',
            'framework/app.controller.user.data_dropdown',
            'framework/app.controller.user.input',
            'framework/app.controller.user.users_dropdown',
            'framework/app.controller.user.delete_account'

        ],function(html_data){

            App.prototype.util.element
            .get('body').innerHTML = html_data;

            App.prototype.util.element
            .get('app-user-data-dropdown-container')
            .innerHTML = App.prototype.controller.user.data_dropdown();

            App.prototype.util.element
             .get('app-user-data-input-container')
             .innerHTML = App.prototype.controller.user.input();

            App.prototype.util.element
            .get('app-user-list-users-dropdown-container')
            .innerHTML = App.prototype.controller.user.users_dropdown();

            App.prototype.util.element
            .get('app-user-delete-container')
            .innerHTML = App.prototype.controller.user.delete_account();


        });


  };

    return{
      app_controller_logged_in : App.prototype.controller.user.logged_in
    };

});
