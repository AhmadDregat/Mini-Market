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

}