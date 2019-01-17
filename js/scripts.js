$(document).ready(function(){
  $("#entry").submit(function(event){
    event.preventDefault();
    $("ul#book").append("<li>" + $("input#first-name").val() + " " + $("input#last-name").val() + " <span class='phone-number'>" + $("input#phone").val() + "</span>" + "</li>");

    $("ul#book").children("li").first().click(function(event){
    alert($("this").children().show();
    event.preventDefault();
    //  $("this").children().show();
    });

    $$("ul#book").children("li").first()("this.phone-number").hide();
  //  location.reload();
  });
});
