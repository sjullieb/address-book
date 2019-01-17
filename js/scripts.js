$(document).ready(function(){
  $("#entry").submit(function(event){
    event.preventDefault();
    $("ul#book").append("<li>" + $("input#first-name").val() + " " + $("input#last-name").val() + " <span class='phone-number'>" + $("input#phone").val() + "</span>" + "</li>");

    $("ul#book").children("li").last().click(function(event){
      alert($("this").firstChild);
    //event.preventDefault();
      $("this").firstChild.show();
    });

    $(".phone-number").hide();
    //$("ul#book").children("li").last().hide();
  //  location.reload();
  });
});
