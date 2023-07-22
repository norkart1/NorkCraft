(function($) {
  
//Navigate to aisle on Item Title Click
$(document).on('click', ".store-nav", function() {
  window.open("item.html?", "_self");
});

//Populate Counries and State Selects
populateCountries("country", "state");

//Bootstrap/HTML snippets for different payment methods
var cardCode = '<div class="row"><div class="col-md-6 mb-3"><label for="cc-name">Name on card</label><input type="text" class="form-control" id="cc-name" placeholder="" required></div><div class="col-md-6 mb-3"><label for="cc-number">Credit card number</label><input type="text" class="form-control" id="cc-number" placeholder="" required></div></div><div class="row"><div class="col-md-3 mb-3"><label for="cc-expiration">Expiration</label><input type="text" class="form-control" id="cc-expiration" placeholder="" required></div><div class="col-md-3 mb-3"><label for="cc-expiration">CVV</label><input type="text" class="form-control" id="cc-cvv" placeholder="" required></div></div>';

var paypalCode = '<div class="row"><div class="col-12"><div class="payment-img"><a href="https://www.paypal.com/us/webapps/mpp/payflow-payment-gateway" target="_blank"><img class="img-fluid" src="img/paypal.png"></a></div></div></div>';

var gwalletCode = '<div class="row"><div class="col-12"><div class="payment-img"><a href="https://pay.google.com/about/business/checkout/" target="_blank"><img class="img-fluid" src="img/gwallet_bnr.png"></a></div></div></div>';

var facepayCode = '<div class="row"><div class="col-12"><div class="payment-img"><a href="https://developers.facebook.com/docs/messenger-platform/payments" target="_blank"><img class="img-fluid" src="img/fb_msngr_pay.png"></a></div></div></div>';

//Handle initial payment code display (credit)
$("#payment_type_form").html(cardCode);

//Handle switch between different payment methods
var currPayment = "credit";
$(document).on('click', ".d-block .custom-radio", function() {
  
  var thisPayment = $(this).find('input').attr('id');
  console.log("thisPayment: " + thisPayment);
  if (thisPayment !== currPayment) {

    currPayment = thisPayment;

    switch(thisPayment) {
      case "credit":
        $("#payment_type_form").html(cardCode);
        break;
      case "debit":
        $("#payment_type_form").html(cardCode);
        break;
      case "paypal":
        $("#payment_type_form").html(paypalCode);
        break;
      case "facebook_pay":
        $("#payment_type_form").html(facepayCode);
        break;
      case "google_wallet":
        $("#payment_type_form").html(gwalletCode);
        break;
    }

  }

  $("#payment_type_form").html()

});

//Handle promo code listings
  //load all promo codes (encrypted w/ ruby tr)
/* code here */
  //handle redeem click and match to promo code object
/* code here */

//Retrieve session cart info
  //Retrieve session vars with non-browser-storage db call
/* code here */
  //Fill in any fields for checkout that contain non empty values
/* Code here */

//Check fields for correct value formats and push id name into errLst Array
var errLst = [];
function chkFields() {
  
  var chkFields = true;

  if ($("#firstName").val().trim() === "" || $("#firstName").val().trim().length < 2 || $("#firstName").val().trim().search(/[^a-zA-Z ]+/) !== -1) {
    errLst.push("firstName");
    chkFields = false;
  }
  
  if ($("#lastName").val().trim() === "" || $("#lastName").val().trim().length < 2 || $("#lastName").val().trim().search(/[^a-zA-Z ]+/) !== -1) {
    errLst.push("lastName");
    chkFields = false;
  }

  if ($("#email").val().trim() === "" || $("#email").val().trim().length < 9 || !$("#email").val().trim().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
    errLst.push("email");
    chkFields = false;
  }

  if ($("#address").val().trim() === "" || $("#address").val().trim().length < 7 || $("#address").val().trim().search(/[^a-zA-Z0-9. ]+/) !== -1) {
    errLst.push("address");
    chkFields = false;
  }

  if ($("#address2").val().search(/[^a-zA-Z0-9. ]+/) !== -1) {
    errLst.push("address2");
    chkFields = false;
  }

  if ($("#country").find("option:selected").text() === "" || $("#country").find("option:selected").text() === "Select Country" || $("#country").find("option:selected").text().search(/[^a-zA-Z ]+/) !== -1) {
    errLst.push("country");
    chkFields = false;
  }

  if ($("#state").find("option:selected").text() === "" || $("#state").find("option:selected").text() === "Select State" || $("#state").find("option:selected").text().search(/[^a-zA-Z ]+/) !== -1) {
    errLst.push("state");
    chkFields = false;
  }

  if ($("#zip").val().trim().length < 3 || $("#zip").val().trim().search(/[^0-9 /-/\//]+/) !== -1) {
    errLst.push("zip");
    chkFields = false;
  }

  if (currPayment === "credit" || currPayment === "debit") {

    if ($("#cc-name").val().trim() === "" || $("#cc-name").val().trim().length < 4 || $("#cc-name").val().trim().search(/[^a-zA-Z ]+/) !== -1) {
      errLst.push("cc-name");
      chkFields = false;
    }

    if ($("#cc-number").val().trim() === "" || $("#cc-number").val().trim().length < 14 || $("#cc-number").val().trim().length > 16 || $("#cc-number").val().trim().search(/[^0-9 ]+/) !== -1) {
      errLst.push("cc-number");
      chkFields = false;
    }

    if ($("#cc-expiration").val().trim() === "" || $("#cc-expiration").val().trim().length < 5 || $("#cc-expiration").val().trim().length > 7 || $("#cc-expiration").val().trim().search(/[^0-9//]+/) !== -1) {
      //Expiration date has passed
      errLst.push("cc-expiration");
      chkFields = false;
    }

    var tmpExpiration = $("#cc-expiration").val().trim().split("/");
    tmpExpiration = new Date(tmpExpiration[1], tmpExpiration[0]);
    var currDate = new Date();
    
    var timeDiff = tmpExpiration - currDate;

    if (timeDiff < 0) { 
      //Expiration date has passed
      errLst.push("cc-expiration");
      chkFields = false;
    }

    if ($("#cc-cvv").val().trim() === "" || $("#cc-cvv").val().trim().length < 3 || $("#cc-cvv").val().trim().length > 4 || $("#cc-cvv").val().trim().search(/[^0-9]+/) !== -1) {
      errLst.push("cc-cvv");
      chkFields = false;
    }

  }

  if (chkFields) {
    return true;
  } else {
    return false;
  }

}

//Iterate through format errors and append appropriate message to errPrmptCde String (HTML code) and change malformatted input border color to red. Finally, print to #err_prmpt div
var errPrmptCde = "";
function detErr(eL) {

  //Create Error Prompt
  eL.forEach(function(eLV, eLI) {

    console.log(eLV);
    $("#"+eLV).css('border-color', 'red');

    switch(eLV) {

      case "firstName":
        errPrmptCde += "<div class='err-msg'>Please check the <b>first name</b> field.</div>";
        break;
      
      case "lastName":
        errPrmptCde += "<div class='err-msg'>Please check the <b>last name</b> field.</div>";
        break;

      case "email":
        errPrmptCde += "<div class='err-msg'>Please check the <b>email</b> field.</div>";
        break;

      case "address":
        errPrmptCde += "<div class='err-msg'>Please check the <b>address</b> field.</div>";
        break;
      
      case "address2":
        errPrmptCde += "<div class='err-msg'>Please check the <b>second address</b> field.</div>";
        break;

      case "country":
        errPrmptCde += "<div class='err-msg'>Please check the <b>country</b> field.</div>";
        break;

      case "state":
        errPrmptCde += "<div class='err-msg'>Please check the <b>state</b> field.</div>";
        break;

      case "zip":
        errPrmptCde += "<div class='err-msg'>Please check the <b>zip/postal code</b> field.</div>";
        break;

      case "cc-name":
        errPrmptCde += "<div class='err-msg'>Please check the <b>" + currPayment + " card name</b> field.</div>";
        break;

      case "cc-number":
        errPrmptCde += "<div class='err-msg'>Please check the <b>" + currPayment + " card number</b> field.</div>";
        break;

      case "cc-expiration":
        errPrmptCde += "<div class='err-msg'>Please check the <b>" + currPayment + " card expiration</b> field.</div>";
        break;

      case "cc-cvv":
        errPrmptCde += "<div class='err-msg'>Please check the <b>" + currPayment + " card CVV</b> field.</div>";
        break;

    }

  });
  
  //Append Error Code to err_prmpt div
  $("#err_prmpt").html(errPrmptCde);

  //Scroll to err_prmpt div
  $('html, body').animate({
    scrollTop: $("#err_prmpt").offset().top
  }, 2000);

}

//Handle form submission
$("#finalize_purchase").on('click', function(e) {
 
  //Reset Format Checker Globals
  errPrmptCde = "";
  errLst = [];
  $("#err_prmpt").html("");
  $(".form-control").css('border-color', '#fff');
  
  //Determine if fields are okay or not and 
  var inptOk = chkFields();
  if (!inptOk) {
    detErr(errLst);
    console.log("Malformatted input fields. Notify user in err_prmpt div.");
    //Scroll to err_prmpt div
    /* code here */
    return false;
  } else {
    console.log("Successfully processed form fields server side.");
    //Finalize Purchase with:
      //Stripe rest service API call with ajax and server side authentication script
    /* Code here */
      //On stripe success, Admin notification & user notification by email script
    /* Code here */
      //Or Paypal API call
    /* Code here */
      //On Paypal API success. Admin notification and user notification
    //Temporary direct navigation to success.html
    window.open("success.html?", "_self");
    return false;
  }
  
  /* e.preventDefault();
  return false; */
});

})(jQuery);