define( function(){

    // **Instantiating function for configuring the app to connect to our firebase database** 

    App.prototype.config = function(){

    var firebase_config = {
            apiKey: FIREBASE_API_KEY,
            authDomain: FIREBASE_API_AUTH_DOMAIN,
            databaseURL: FIREBASE_API_DATABASE_URL,
            storageBucket: ''
    };

     try{
            console.log( firebase.initializeApp(firebase_config) );
            App.prototype.util.status.firebase = true;
            App.prototype.util.online();
        }
        catch(error){
            App.prototype.util.status.firebase = error.message;
            App.prototype.util.online();
        }


    };

});
