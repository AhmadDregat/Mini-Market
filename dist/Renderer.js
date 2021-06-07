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
    renderDataCart = function(items) {
        const source = $("#cart-template").html()
        const template = Handlebars.compile(source)
        let itemSheet = template({ items })
        $(".menu").empty()
        $(".menu").append(itemSheet)
    }

    renderAdminBtn = function() {
        const source = $("#admin-template").html()
        const template = Handlebars.compile(source)
        let itemSheet = template()
        $("#navbar").append(itemSheet)
    }

    renderAdminBage = function() {
        const source = $("#adminPage-template").html()
        const template = Handlebars.compile(source)
        let itemSheet = template()
        $(".menu").empty()
        $(".menu").append(itemSheet)
    }

    renderSignOut = function() {
        const source = $("#signout-template").html()
        const template = Handlebars.compile(source)
        let itemSheet = template()
        $("#signOut").append(itemSheet)
    }


}