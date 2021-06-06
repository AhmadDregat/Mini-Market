class Render {
    constructor() {

    }
    renderData = function(items) {
        const source = $("#store-template").html()
        const template = Handlebars.compile(source)
        let itemSheet = template({ items })
        $(".menu").empty()
        $(".menu").append(itemSheet)
    }


    renderLoginPage = function() {
        const source = $("#Login-template").html()
        const template = Handlebars.compile(source)
        let itemSheet = template()
        $(".menu").empty()
        $(".menu").append(itemSheet)
    }

    renderSignUpPage = function() {
        const source = $("#SignUp-template").html()

 

        const template = Handlebars.compile(source)
        let itemSheet = template()
        $(".menu").empty()
        $(".menu").append(itemSheet)
    }

}