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
        let cartTotal = 0
        $(".menu").empty()
        $(".menu").append(itemSheet)
        items.forEach(e => cartTotal += e.total)
        $(".total-price").empty()
        $(".total-price").append(cartTotal)
    }

    renderAdminBtn = function() {
        const source = $("#admin-template").html()
        const template = Handlebars.compile(source)
        let itemSheet = template()
        $("#navbar").empty()
        $("#navbar").append(itemSheet)
    }

    renderAdminBage = function(items) {
        const source = $("#adminPage-template").html()
        const template = Handlebars.compile(source)
        let itemSheet = template({ items })
        $(".menu").empty()
        $(".menu").append(itemSheet)
    }

    renderSignOut = function() {
        const source = $("#signout-template").html()
        const template = Handlebars.compile(source)
        let itemSheet = template()
        $("#signOut").empty()
        $("#signOut").append(itemSheet)
    }
    renderAddNewItemForm = function() {
        const source = $("#addNewItem-template").html()
        const template = Handlebars.compile(source)
        let formNewItemSheet = template()
        $(".menu").empty()
        $(".menu").append(formNewItemSheet)
    }

    renderOrderHistory = function(items) {
        const source = $("#orderHistory-template").html()
        const template = Handlebars.compile(source)
        let itemSheet = template({ items })
        $(".menu").empty()
        $(".menu").append(itemSheet)
    }

}