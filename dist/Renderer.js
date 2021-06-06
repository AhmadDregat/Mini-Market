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

    renderContactPage = function() {
        const source = $("#contact-page").html()
        const template = Handlebars.compile(source)
        let itemSheet = template()
        $(".menu").empty()
        $(".menu").append(itemSheet)
    }

}