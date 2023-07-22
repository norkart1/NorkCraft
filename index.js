(function($) {
   
   //Navigate to item.html on 'aisle' click
   $(".card-footer").on('click', function() {
      window.open("item.html?", "_self");
   });

   //Popup functionality
  function initPopUp() {
    $("html").append('<div class="pUp"><div class="pUpOuter"><div class="pUpMiddle"><div class="pUpCntnt"><i class="fa fa-close pUpClz"></i></div></div></div>');
  }
  
  //Remove pUp Div on pop up close button click
  $(document).on('click', ".pUpClz", function() {
    $(".pUp").remove();
  });

  $("#cTAPUP").on('click', function() {
     initPopUp();
     
     cTAHTML = "<center>";
     cTAHTML += '<i class="fa fa-handshake-o" style="font-size: 100px;"></i>';
     cTAHTML += "<hr>";
     cTAHTML += "<h2>Say what you need to say.</h2>";
     cTAHTML += "<p>Proin et dui porta mauris lobortis pretium sed ut ex. Pellentesque nunc purus, tempor vitae condimentum nec, blandit non sem. <code>stefangisi.website</code> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>";
     cTAHTML += "<hr>";
     cTAHTML += "<button class='btn btn-primary' style='font-size: 50px;'>Got it!</button>";
     cTAHTML += "</center>";
     $(".pUpCntnt").append("<img class='img-fluid' src='img/flyer_template.png'>");
  });
  
  $("#cstmr_rvw").on('click', function() {
    var rvw_cde = '<form id="rvw_frm" accept-charset="UTF-8" action="" method="post">';
    rvw_cde +=    '<input id="ratings-hidden" name="rating" type="hidden" value="1">';
    rvw_cde +=    '<textarea class="form-control animated" cols="50" id="new-review" name="comment" placeholder="Enter your review here..." rows="5" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 54px;"></textarea>';
    rvw_cde +=    '<div class="text-right">';
    rvw_cde +=    '<div id="star-amt" class="text-warning"><span class="rvw-str">&#9734;</span> <span class="rvw-str">&#9734;</span> <span class="rvw-str">&#9734;</span> <span class="rvw-str">&#9734;</span> <span class="rvw-str">&#9734;</span></div>';
    rvw_cde +=    '</div>'
    rvw_cde +=    '<button class="btnΩΩ btn-primary btn-sm" id="close-review-box" style="margin-right: 10px;">';
    rvw_cde +=    '<span class="glyphicon glyphicon-remove"></span>Cancel</button>';
    rvw_cde +=    '<button class="btn btn-primary btn-lg" type="submit"><span>Save</span></button>';
    rvw_cde +=    '</div>';
    rvw_cde +=    '</form>';
    $(this).parent().append(rvw_cde);
    $(this).remove();
  });

  $("#close-review-box").on('click', function() {
     $("#rvw_frm").remove();
     $(this).parent().parent().append('<button id="cstmr_rvw" class="btn btn-primary">Leave a Review</button>');
  });

  $('#characterLeft').text('140 characters left');
  $('#message').keydown(function () {
    var max = 140;
    var len = $(this).val().length;
    if (len >= max) {
        $('#characterLeft').text('You have reached the limit');
        $('#characterLeft').addClass('red');
        $('#btnSubmit').addClass('disabled');            
    } 
    else {
        var ch = max - len;
        $('#characterLeft').text(ch + ' characters left');
        $('#btnSubmit').removeClass('disabled');
        $('#characterLeft').removeClass('red');            
    }
  });  

  function updtRvwStrs(ind) {

     var strCde = "";

     switch (ind) {
       case 0:
          strCde = '<span class="rvw-str">&#9733;</span> <span class="rvw-str">&#9734;</span> <span class="rvw-str">&#9734;</span> <span class="rvw-str">&#9734;</span> <span class="rvw-str">&#9734;</span>';
          break;
       case 1:
          strCde = '<span class="rvw-str">&#9733;</span> <span class="rvw-str">&#9733;</span> <span class="rvw-str">&#9734;</span> <span class="rvw-str">&#9734;</span> <span class="rvw-str">&#9734;</span>';
          break;
       case 2:
          strCde = '<span class="rvw-str">&#9733;</span> <span class="rvw-str">&#9733;</span> <span class="rvw-str">&#9733;</span> <span class="rvw-str">&#9734;</span> <span class="rvw-str">&#9734;</span>';
          break;
       case 3:
          strCde = '<span class="rvw-str">&#9733;</span> <span class="rvw-str">&#9733;</span> <span class="rvw-str">&#9733;</span> <span class="rvw-str">&#9733;</span> <span class="rvw-str">&#9734;</span>';
          break;
       case 4:
          strCde = '<span class="rvw-str">&#9733;</span> <span class="rvw-str">&#9733;</span> <span class="rvw-str">&#9733;</span> <span class="rvw-str">&#9733;</span> <span class="rvw-str">&#9733;</span>';
          break;
     }

     $("#star-amt").html(strCde);
  }

  $(document).on('click', ".rvw-str:eq(0)", function() {
       updtRvwStrs(0);
  });
  $(document).on('click', ".rvw-str:eq(1)", function() {
       updtRvwStrs(1);
  });
  $(document).on('click', ".rvw-str:eq(2)", function() {
       updtRvwStrs(2);
  });
  $(document).on('click', ".rvw-str:eq(3)", function() {
       updtRvwStrs(3);
  });
  $(document).on('click', ".rvw-str:eq(4)", function() {
       updtRvwStrs(4);
  });
 
  //Navigate to Resume website from index.html
  $(document).on('click', '#resume_link', function() {
    window.open("https://www.stefangisi.website/", "_blank");
  });
  
  console.log(window.nonEnglish);
  //Handle different language file navigation
  $("#engl").on('click', function() {
    if (window.nonEnglish) {
      window.open("../../index.html", "_self");
    } else {
      window.open("index.html", "_self");
    }
  });

  $("#jap").on('click', function() {
    if (window.nonEnglish) {
      window.open("../ja/index.html", "_self");
    } else {
      window.open("lang_dir/ja/index.html", "_self");
    }
  });
  
  $("#kor").on('click', function() {
    if (window.nonEnglish) {
      window.open("../ko/index.html", "_self");
    } else {
      window.open("lang_dir/ko/index.html", "_self");
    }
  });

  $("#chn").on('click', function() {
    if (window.nonEnglish) {
      window.open("../cn/index.html", "_self");
    } else {
      window.open("lang_dir/cn/index.html", "_self");
    }
  });

  //Implement localize.json
  if (window.nonEnglish) {

    if (window.location.href.indexOf("ja") !== -1) {
      wrtFL("ja");
    }

    if (window.location.href.indexOf("cn") !== -1) {
      wrtFL("cn");
    }

    if (window.location.href.indexOf("ko") !== -1) {
      wrtFL("ko");
    }

  }

  function wrtFL(lang) {
      console.log("Init write Foreign Language, code " + lang);
      $.ajax({
        url: '../localize.json',
        dataType: 'json'
      }).done(function(res) {
        var tmpLngObj = res[0][lang];
        $.each(tmpLngObj, function(tLOI, tLOV) {
          $(tLOI).html(tLOV);
        });
      }).fail(function(err) {
        console.log("Error loading localize.json.")
        console.log(err);
      })
  }

})(jQuery);