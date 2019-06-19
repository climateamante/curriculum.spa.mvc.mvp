define( function(){

  var html_data = (function(){/*
    <p id="app-user-data-input">
      <mark>
        app-user-data-input
      </mark>
      <form id="app-user-data-form" action=""  autocomplete="off" >
               <label for="key">key</label>
               <input id="app-user-data-key" type="" name="key" placeholder="key">
               <label for="valye">value</label>
               <input id="app-user-data-value" type="" name="value" placeholder="value">
               <input type="submit" value="add key and value">
      </form>

    </p>
  */});

 return App.prototype.util.template(html_data);

});
