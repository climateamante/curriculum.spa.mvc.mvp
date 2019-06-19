define( function(){

    // Function for removing regex from javascript strings when loading html views.

    App.prototype.util.template = function(html_template){

        //remove long form javascript comment to return raw html for template
        return html_template.toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

    };

    return App.prototype.util.template;

});
