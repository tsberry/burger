$(function () {
    $("body").on("click", ".burger-button", function (event) {
        var id = {id: $(this).data("id")};
        console.log(id);
        $.ajax("/api/burgers", {data: id, type:"PUT"}).then(function() {
            console.log("Devoured burger.");
            location.reload();
        });
    });

    $("#burger-form").submit(function(event) {
        event.preventDefault();
        var $form = $(this);
        var name = $form.find("input[name='name']").val();
        var burger = {"name": name};
        console.log(burger);
        $.post("/api/burgers", burger).then(function(data) {
            location.reload();
        });
    });
});