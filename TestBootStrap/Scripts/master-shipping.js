//create isValid function to check if form is valid or not
function isValid(id) {
  var idValue = $(id).val();

  //if no string value in form variable then the form is not valid
  if (idValue === "") {
    return false;
  }

  //if there is a string value in form variable then form is valid
  else {
    return true;
  }
}

//create isDigit to check for account number
function isDigit(userInput) {
  var numOnly = /^[0-9]+$/;
  var accountNum = userInput.value.match(numOnly);
  var userAccount = userInput.value;

  //checks if accountNum is an integer
  if (accountNum || userAccount === "") {
    return true;
  }

  //returns false if account num is not an integer
  else {
    return false;
  }
}

$(document).ready(function() {
  /*===============================================================
  Yes Form Valadation
=================================================================*/
  var countries = "#countries-option";

  $("#yes, #no").on("click", function() {
    var yes = $("#yes");

    if (yes.is(":checked")) {
      $("#countries-menu").hide();
      $("#account-num").hide();
      $("#desired-courier").hide();
      $("#download-doc").show();
      $("#proceed-2").hide();

      $("#upload-doc").on("change", function() {
        $("#proceed").show();
      });

      $("#download-doc").on("click", function() {
        $("#upload-us").show();
      });

      $("#upload-doc").on("change", function(e) {
        var fileName = e.target.files[0].name;
        $(".custom-file-label").html(fileName);
      });
    } else {
      $("#proceed").hide();
      $("#countries-menu").show();
      $("#download-doc").hide();
      $("#proceed-2").show();
      $("#upload-us").hide();

      if (isValid(countries)) {
        $("#account-num").show();
        $("#desired-courier").show();
      }
    }
  });

  /*===============================================================
  No Form Valadation
=================================================================*/

  $("#countries-menu").on("click", function() {
    if (isValid(countries)) {
      $("#account-num").show();
      $("#desired-courier").show();
    } else {
      $("#account-num").hide();
      $("#desired-courier").hide();
    }
  });

  $("#user-account").on("keyup", function() {
    if (isDigit(this)) {
      $("#valid-num").hide();
    }
  });

  /*===============================================================
                    Modal Transition To Shipping Policy
                =================================================================*/

  $("#shipping-click").on("click", function() {
    var shipPrompt = $("#shipping-prompt");
    shipPrompt.animate({
      width: "hide"
    });
  });

  $("#warranty-click").on("click", function() {
    var shipPrompt = $("#shipping-prompt");
    shipPrompt.animate({
      width: "hide"
    });
  });

  $("#faq-click").on("click", function() {
    var shipPrompt = $("#shipping-prompt");
    shipPrompt.animate({
      width: "hide"
    });
  });

  $(".modal").on("hide.bs.modal", function() {
    var shipPrompt = $("#shipping-prompt");
    shipPrompt.animate({
      width: "show"
    });
  });

  $("#ship-close-click").on("click", function() {
    var shipPrompt = $("#shipping-prompt");
    shipPrompt.animate({
      width: "show"
    });
  });
});
