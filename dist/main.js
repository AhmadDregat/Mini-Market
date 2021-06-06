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

$("body").on("click", "#signIn-btn", function() {
    console.log("bhaa ya khra")
    $("#signIninput-error").empty()
    const name = $('#name-input').val()
    const password = $('#password-input').val()
    $.ajax({
        url: `/checkuser/?name=${name}&password=${password}`,
        type: 'get',
        async: false,
        success: function(isExist) {
            if (isExist) {
                myHome()
                $("#header-element").html(`<b>Hello ${name} </b>`)
                $("#header-element").css("pointer-events", "none");
            } else {
                $("#signIninput-error").empty()
                $("#signIninput-error").append("user dosnt exsit")
            }
        }
    });
})


$("body").on("click", "#signUp", function() {
    const name = $('#name').val()
    const password = $('#password').val()
    const phone = $('#phone').val()
    const adress = $('#adress').val()
    if (name == "" || password == "" || password.length <= 6 || password.length >= 12 || phone == "" || phone.length != 10 || adress == "") {
        $("#input-error").empty()
        $("#input-error").append("Check your input")

    } else {
        let user = { name: name, password: password, phone: phone, adress: adress, status: true }
        $.post('/user', user, function(response) {
            myHome()
            $("#header-element").html(`<b>Hello ${name} </b>`)
            $("#header-element").css("pointer-events", "none");
        })
    }




})


const myFunction = function() {
    $("#navbar").slideToggle(1000);
}