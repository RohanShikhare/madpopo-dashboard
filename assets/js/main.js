$(document).ready(function () {
  $("li.open").prev("li").addClass("before-open");
  $("li.open").next("li").addClass("after-open");
  $(".sideMenuTitle").click(function () {
    $(".sideBarDiv").toggleClass("collapsed-sidebar");
    if ($(".sideBarDiv").hasClass("collapsed-sidebar")) {
        $('[data-bs-toggle="tooltip"]').tooltip(); 
      } else {
        $('[data-bs-toggle="tooltip"]').tooltip("dispose"); 
      }
  });
  $(".datepicker").datepicker({
    dateFormat: "MM yy"
  });
 
});
