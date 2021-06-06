class Render {
    constructor() {

    }
    renderData = function(items) {
            const source = $("store-template").html()
            const template = Handlebars.compile(source)
            let itemSheet = template({ items })
            $(".menu").empty()
            $(".menu").append(itemSheet)
        }
        // showDreamTeam = function(dreamTeamplayers) {
        //     $(".results").empty()
        //     for (let player of dreamTeamplayers) {
        //         $(".results").append(player + " | ")
        //     }

    // }

}