//console.log("burger time!");
$(".not-devou").click( function(e){
    e.preventDefault();
    console.log("burger time!");
    var id = $(this).data("id");
    var newDevour = $(this).data("devoured");
    console.log(id);
    console.log(newDevour);
    console.log(this);
    

    var newDevourState = {
        devoured:newDevour
    };
// Send the PUT request.
$.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevourState
  }).then(
    function() {
      console.log("changed devour to", newDevour);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

