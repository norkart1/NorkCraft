(function($) {
  
  /* If user is not logged in, direct user to login. if user account exists && user cart exists push login-prior cart into user account saved cart */

  //Empty shopping card code
  var emptyCart = '<div class="row"><div class="col-12"><div class="box"><div class="icon"><div class="image"><i class="fa fa-shopping-cart"></i></div><div class="info"><h3 class="title">Your Shopping Cart is Empty!</h3><p>Please return back to <span id="store_nav" class="cart-spec">the store</span> and find what you love! Don\'t forget to <span id="login_nav" class="cart-spec">sign in</span> if you haven\'t already. Thank you for visiting Web Store v3.0.</p></div></div><div class="space"></div></div></div></div>';
   
  //Load Cart Session and print table to cart.html page
    //Calculate Subtotal, Taxes and Final Total
  /* Code here */

  //Remove item (Refresh session and then page after)
    //Update Session
  /* Code here */
    //Refresh page
  /* Code here */
    //Temporary UI for development
  $(document).on('click', '.rem-item', function() {
    $("table").remove();
    $("#cart-home").append(emptyCart);
    $("#crt_ttl").html("0");
  });

  //Navigate to aisle on Item Title Click
  $(".store-nav").on('click', function() {
    window.open("item.html?", "_self");
  });
  
  //Navigate to login if cart is empty
  $(document).on('click', "#login_nav", function() {
    window.open("login.html?", "_self");
  });

  $(document).on('click', "#store_nav", function() {
    window.open("store.html?", "_self");
  });

})(jQuery);