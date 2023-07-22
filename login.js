(function($) {
  
  //Handle switch between registered account and non-registered on #init_lgn click

  $("#init_lgn").on('click', function(e) {
  
    //Temporary direct to register.html only. Later 
    window,open('register.html', '_self');
    
    //Add profile.html to file directory for beta version sample login credentials
    /* Code here */
    

    e.preventDefault();
    return false;
  });

  // https://bootsnipp.com/snippets/xvRWm
  $('.swatch-clickable').each(function () {
    $(this).attr('title', $(this).attr('id'));
  });

  $('.swatch-clickable').tooltip();

  $(".swatch-clickable").click(function() {
    
      $("#preview").css('color', $(this).css('background-color'));

      $("#color-field").val($(this).attr("id"))
  });


  

})(jQuery);