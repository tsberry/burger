$(function () {
    $("body").on("click", ".burger-button", function (event) {
        var id = {id: $(this).data("id")};
        console.log(id);
        $.ajax("/api/burgers", {data: id, type:"PUT"}).then(function() {
            console.log("Devoured burger.");
            location.reload();
        });
    });
});