window.addEventListener('load', function () {
  const amenityIds = {};
    $.get("http://0.0.0.0:5001/api/v1/status/", function(data, status){
        alert("Status: " + status);
        if (status == "OK"){
          $("api_status").addClass("available");
        }
        else {
          $("api_status").removeClass("available");
        }
  });
  $('input[type=checkbox]').change(function () {
    if ($(this).prop('checked')) {
      amenityIds[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
      delete amenityIds[$(this).attr('data-id')];
    }
    if (Object.keys(amenityIds).length === 0) {
      $('div.amenities h4').html('&nbsp');
    } else {
      $('div.amenities h4').text(Object.values(amenityIds).join(', '));
    }
  });
});

