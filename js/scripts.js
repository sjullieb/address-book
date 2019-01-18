$(document).ready(function(){
  $("#entry").submit(function(event){
    event.preventDefault();
    $("ul#book").append("<li>" + $("input#first-name").val() + " " + $("input#last-name").val());
    $("ul#book").append("<span class='phone-number'>" + $("input#phone").val() + "</span>" + "</li>");

    $("ul#book").children("li").last().click(function(event){
      //var element = $("this").childernNodes[0];
      //element.toggle();
      var value = $(this).val();
      console.log(value);
      //debugger;
      //alert(value);
    //  alert($(this).firstChild);
    //event.preventDefault();
      $(this).next().toggle();
    });

    $(".phone-number").hide();
    //$("ul#book").children("li").last().hide();
  //  location.reload();
  });
});
