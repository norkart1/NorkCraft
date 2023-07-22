(function($) {

  $.ajax({
    url: "products.json"
  }).done(function(res) {
    console.log(res);
    var pLC = "";
    $.each(res, function(pli, plv) {
       pLC += '<div class="col-10">' + plv.description + '</div>' + '<div class="col-2"><i class="fa fa-close"></i></div>';
    });
    $("#prod_list").html(pLC);
  }).fail(function(err) {
    console.log(err);
  });     
  
  // UPLOAD CLASS DEFINITION
  // ======================

  var dropZone = document.getElementById('drop-zone');
  var uploadForm = document.getElementById('js-upload-form');

  var startUpload = function(files) {
    console.log(files)
  }

  uploadForm.addEventListener('submit', function(e) {
    var uploadFiles = document.getElementById('js-upload-files').files;
    e.preventDefault()

    startUpload(uploadFiles)
  })

  dropZone.ondrop = function(e) {
    e.preventDefault();
    this.className = 'upload-drop-zone';

    startUpload(e.dataTransfer.files)
  }

  dropZone.ondragover = function() {
    this.className = 'upload-drop-zone drop';
    return false;
  }

  dropZone.ondragleave = function() {
    this.className = 'upload-drop-zone';
    return false;
  }

})(jQuery);