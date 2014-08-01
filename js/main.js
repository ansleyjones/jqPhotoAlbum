$(document).ready(function() {

  $(".thumbMain a").click(function(event){

    event.preventDefault();
    var navigated = "." + $(this).attr("rel");
    console.log(navigated);

    $(".container").children().removeClass("currentPage");
    $(navigated).addClass("currentPage");

  });

  $(".albumOne").on("click", ".pic", function(event) {
    event.preventDefault();
    $(this).closest("li").siblings().addClass("hide");
    $(this).addClass("checked").removeClass('pic');
    $(this).closest("li").siblings().find("a").removeClass('pic');
  });

  $(".albumOne").on("click", ".checked", function(event) {
    event.preventDefault();
    $(this).addClass('pic');
    $(this).closest('li').siblings().find('a').addClass('pic');
    $(this).removeClass("checked");
    $(this).closest('li').siblings().removeClass("hide");
  });

  $(".albumTwo").on("click", ".pic", function(event) {
    event.preventDefault();
    $(this).closest("li").siblings().addClass("hide");
    $(this).addClass("checked").removeClass('pic');
    $(this).closest("li").siblings().find("a").removeClass('pic');
  });

  $(".albumTwo").on("click", ".checked", function(event) {
    event.preventDefault();
    $(this).addClass('pic');
    $(this).closest('li').siblings().find('a').addClass('pic');
    $(this).removeClass("checked");
    $(this).closest('li').siblings().removeClass("hide");
  });


  $(".albumThree").on("click", ".pic", function(event) {
    event.preventDefault();
    $(this).closest("li").siblings().addClass("hide");
    $(this).addClass("checked").removeClass('pic');
    $(this).closest("li").siblings().find("a").removeClass('pic');
  });

  $(".albumThree").on("click", ".checked", function(event) {
    event.preventDefault();
    $(this).addClass('pic');
    $(this).closest('li').siblings().find('a').addClass('pic');
    $(this).removeClass("checked");
    $(this).closest('li').siblings().removeClass("hide");
  });
});
