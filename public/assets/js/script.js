console.log("hello");

$(document).on("click", "#add-burger", function(){

    console.log("this ran");
    let burger_name = $("#ca").val().trim();

    let devoured = 0;

    let burgerObj = {
        burger_name,
        devoured
    }

    $.post("/burgers", burgerObj, function(data){
        console.log(data);
        location.reload();
    })
})