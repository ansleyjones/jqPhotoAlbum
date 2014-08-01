$(document).ready(function() {

  $(".thumbMain a").click(function(event){

    event.preventDefault();
    var navigated = "." + $(this).attr("rel");
    console.log(navigated);

    $(".container").children().removeClass("currentPage");
    $(navigated).addClass("currentPage");

  });

  $(".images a").click(function(event) {
    event.preventDefault();
    $(this).closest('li').siblings().toggleClass('hide');
    $(this).toggleClass('checked');
  });

});
