define( function(){

  var html_data = (function(){/*

    <form id="app-signout" action="" autocomplete="off" >
       <input type="submit" value="signout">
   </form>

    <p id="app-user-logged-in"> app-user-logged-in </p>

    <p id="app-user-data-dropdown-container"> app-user-data-dropdown-container </p>

    <p id="app-user-data-input-container"> app-user-data-input </p>
    
    <p id="app-user-container"> app-user-container </p>

    <select id="app-user-list-users-dropdown-container"> app-user-list-users-dropdown </select>

    <p id="app-user-delete-container"> app-user-delete </p>

  */});

 return App.prototype.util.template(html_data);

});
