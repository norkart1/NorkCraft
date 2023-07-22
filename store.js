$(document).ready(function() {
  $.ajax({
    url: "products.json"
  }).done(function(res) {
    console.log(res);
    $.each(res, function(pli, plv) {
       $("#item_list").append('<div class="col-lg-12"><div class="card mt-4"><img class="card-img-top img-fluid" src="https://placehold.it/900x400" alt=""><div class="card-body"><div class="row"><div class="col-6"><p class="card-text">' + plv.description + '</p><h4>$' + plv.price + '</h4><h3 class="card-title">' + plv.manufacturer + '</h3><span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>4.0 stars</div><div class="col-6"><center><div class="qty-changer"><button class="qty-change">-</button><input class="qty-input form-group" type="number" value="1" min="0"/><button class="qty-change">+</button></div></center><center style="margin-top: 10px;"><button class="add-to-cart btn btn-primary" class="btn btn-primary"><i class="fa fa-shopping-cart"></i><br><small>Add to cart</small></button></center><center style="margin-top: 10px;"><small class="text-success" style="display: none;">Successfully updated cart...</small></center></div></div></div></div><!-- /.card --><div class="card card-outline-secondary my-4"><div class="card-header">Product Reviews</div><div class="card-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p><small class="text-muted">Posted by Anonymous on 3/1/17</small><hr><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p><small class="text-muted">Posted by Anonymous on 3/1/17</small><hr><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p><small class="text-muted">Posted by Anonymous on 3/1/17</small><hr><button id="cstmr_rvw" class="btn btn-primary">Leave a Review</button></div></div><!-- /.card --></div>');
    });
  }).fail(function(err) {
    console.log(err);
  });   
  
  //https://css-tricks.com/number-increment-buttons/
  //Adjust min=0 attributed input for individual item listing bootstrap card
  $(document).on('click', ".qty-change", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
    // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $button.parent().find("input").val(newVal);

  });
  
  //Temporary cart update implement for BETA
  var cartTotal = 1; // var cartTotal = session_storage response 
  $(document).on('click', ".add-to-cart", function() {

     $button = $(this);
     
     var addAmt = parseInt($button.parent().parent().parent().find(".qty-input").val());
     cartTotal = cartTotal + addAmt;

     $("#crt_ttl").html(cartTotal.toString());
     fadeSuccess($button.parent().parent().parent().find(".text-success"));
  });

  //Fade in success animation on add to cart click
  function fadeSuccess($item_to_add) {
    $item_to_add.fadeIn( "slow", function() {
      $item_to_add.fadeOut( 4000 );
    });
  }
});
