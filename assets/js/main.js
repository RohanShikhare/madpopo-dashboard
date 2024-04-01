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
    dateFormat: "MM yy",
  });
  $("#nh-cat-input-add-wrap").on("click", function () {
    $("#add-btn-modal").modal("show");
  });
  $("#ac-modal-closebtn").on("click", function () {
    $("#add-btn-modal").modal("hide");
  });
  $("#bottom-close-btn").on("click", function () {
    $("#add-btn-modal").modal("hide");
  });
});
