const render = new Render()

$.ajax({
    url: '/items',
    type: 'get',
    async: false,
    success: function(data) {
        // console.log(data)
        render.renderData(data)
    }
});
let cart = {}
$("body").on("click", ".add-to-cart", async function(params) {
    cart.count = parseInt($(this).siblings("input").val())
    cart.name = $(this).siblings("#name").text()
    cart.price = parseInt($(this).siblings("#price").text())
    cart.total = (cart.count * cart.price)
    await $.post('/itemcart', cart, function(response) {

    })



})

const myHome = function() {
    $.ajax({
        url: '/items',
        type: 'get',
        async: false,
        success: function(data) {
            // console.log(data)
            render.renderData(data)
        }
    });
}


myHome()
$("#header-element").on("click", function() {

    render.renderLoginPage()
})

$("body").on("click", "#signUp-btn", function() {

    render.renderSignUpPage()
})

$("body").on("click", "#signUp", function() {
    const name = $('#name').val()
    const password = $('#password').val()
    const phone = $('#phone').val()
    const adress = $('#adress').val()
    let user = { name: name, password: password, phone: phone, adress: adress, status: true }
    $.post('/user', user, function(response) {
        myHome()
        $("#header-element").html(`<b>Hello ${name} </b>`)
        $("#header-element").css("pointer-events", "none");
    })



})


const myFunction = function() {
    $("#navbar").slideToggle(1000);
}