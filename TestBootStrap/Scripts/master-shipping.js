$(document).ready(function () {
  /*===============================================================
                    Modal Transition To Shipping Policy
                =================================================================*/

  $("#shipping-click").on("click", function () {
    var shipPrompt = $("#shipping-prompt");
    shipPrompt.animate({
      width: "hide"
    });
  });

  $("#warranty-click").on("click", function () {
    var shipPrompt = $("#shipping-prompt");
    shipPrompt.animate({
      width: "hide"
    });
  });

  $("#faq-click").on("click", function () {
    var shipPrompt = $("#shipping-prompt");
    shipPrompt.animate({
      width: "hide"
    });
  });

  $("#shipping-policy").on("hide.bs.modal", function () {
    var shipPrompt = $("#shipping-prompt");
    shipPrompt.animate({
      width: "show"
    });
  });

  $("#warranty-return").on("hide.bs.modal", function () {
    var shipPrompt = $("#shipping-prompt");
    shipPrompt.animate({
      width: "show"
    });
  });

  $("#faq").on("hide.bs.modal", function () {
    var shipPrompt = $("#shipping-prompt");
    shipPrompt.animate({
      width: "show"
    });
  });

  $("#ship-close-click").on("click", function () {
    var shipPrompt = $("#shipping-prompt");
    shipPrompt.animate({
      width: "show"
    });
  });
});
