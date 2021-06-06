const render = new Render()

$.ajax({
    url: '/items',
    type: 'get',
    async: false,
    success: function(data) {
        console.log(data)
        render.renderData(data)
    }
});