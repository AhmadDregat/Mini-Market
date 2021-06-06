const render = new Render()

$.ajax({
    url: '/items',
    type: 'get',
    async: false,
    success: function(data) {
        render.renderData(data)
    }
});

const myFunction = function() {
    $("#navbar").slideToggle(1000);
}


const myHome = function() {
    $.ajax({
        url: '/items',
        type: 'get',
        async: false,
        success: function(data) {

            render.renderData(data)
        }
    });

}