# Questions for Firebase App
This is a list of questions that came up while learning the ins and outs of the firebase app.

## What is .prototype?
.prototype is used to target an object constructor directly, rather than individual objects.

You can find information on usage of .prototype [here](https://www.w3schools.com/js/js_object_prototypes.asp)

## What is a try/catch function doing?
This is similar to if/else statement. Try/catch statements are used for testing code for errors. The try statement is filled with what is to be tested. The catch statement is filled with how you wish to handle errors that are caught.

You can read more about try/catch statements [here](https://www.w3schools.com/js/js_errors.asp)

## What's with the modules that return just an empty JSON object?
This is done to instatiate an object for further use. Once instantiated, the object can have methods and properties added to it.

## What is the *traverse* function used for?


```
function traverse( object_to_traverse , callback_function ) {
    for (var item in object_to_traverse) {
        callback_function.apply(this,[ item , object_to_traverse [ item ]]);
        if ( object_to_traverse [ item ] !== null && typeof( object_to_traverse [ item ]) == 'object') {
            //going on step down in the object tree!!
            traverse( object_to_traverse [ item ],callback_function);
        }
    }
}
```

This is used to create an object tree of objects in the database. This function is used, because it is impossible to know exactly how many objects there may be. In addition, it's impossible to know how many properties those objects may have. The traverse function loops over each object and builds an object tree.

## What is .once?
.once is a method used to fire an event only once for a particular object.

## What is the anonymous function that is called after *require* is called in app.js?
```
,function(){

    app.config();

    require([
    'framework/app.view.signin',
    ],function(html_data){
        App.prototype.user.view = html_data;
        App.prototype.util.element.get('body').innerHTML = html_data;
        App.prototype.controller.signin();
});
```

This function first runs the apps config function, which configures the app to use the firebase database. Then it requires the signin view and calls another anonymous function which pulls in the html data for the signin page.

## What is the util.mutation module used for?
This module is used to make changes to something before it is attached to the DOM. In addition, the module is setting up MutationObservers, which watch for new changes to these nodes.