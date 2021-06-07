const render = new Render()

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


let cart = {}
$("body").on("click", "#add-to-cart", async function(params) {
    cart.count = parseInt($(this).siblings("input").val())
    cart.name = $(this).siblings("#name").text()
    cart.price = parseInt($(this).siblings("#price").text())
    cart.total = (cart.count * cart.price)
    await $.post('/itemcart', cart, function(response) {

    })



})

$("body").on("click", ".cart-btn", async function(params) {
    $.ajax({
        url: '/CartItems',
        type: 'get',
        async: false,
        success: function(data) {
            // console.log(data)
            render.renderDataCart(data)
        }
    });


})



$("#header-element").on("click", function() {

    render.renderLoginPage()
})

$("body").on("click", "#signUp-btn", function() {
    render.renderSignUpPage()
})




$("body").on("click", "#signIn-btn", function() {

    $("#signIninput-error").empty()
    const name = $('#name-input').val()
    const password = $('#password-input').val()
    $.ajax({
        url: `/checkuser/?name=${name}&password=${password}`,
        type: 'get',
        async: false,
        success: function(isExist) {
            alert(isExist.isAdmin)
            if (isExist.isExist && isExist.isAdmin) {
                myHome()
                render.renderSignOut()
                render.renderAdminBtn()
                $("#header-element").html(`<b>Hello ${name} </b>`)
                $("#header-element").css("pointer-events", "none");
            } else if (isExist && isExist.isAdmin != true) {
                myHome()
                render.renderSignOut()
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

$("body").on("click", "#menu-icon", function() {
    $("#navbar").slideToggle(1000);
})

$("body").on("click", "#admin-btn", function() {
    render.renderAdminBage()
})