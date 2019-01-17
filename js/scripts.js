$(document).ready(function(){
  $("#entry").submit(function(event){
    event.preventDefault();
    $("ul#book").append("<li>" + $("input#first-name").val() + " " + $("input#last-name").val() + " <span class='phone-number'>" + $("input#phone").val() + "</span>" + "</li>");
    
    $(".phone-number").hide();
  });
});
