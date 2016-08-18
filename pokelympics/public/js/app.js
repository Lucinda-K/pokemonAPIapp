/**
 * Bracara v1.0
 * HTML5 & CSS3 Multipurpose Theme
 * http://leaftree.pt/bracaraHTML
 *
 * leaftree 2013
 * @leaftreeInc
 * http://leaftree.pt
 */

(function ($) {
  "use strict";

  $(document).ready(function() {

    // Panel Version 1
    var active = $('#panels-1-block .active').first().parent().attr('data-target');
    $(active).show();

    var panelRunning = false;
    $('#panels-1-block .panel-1-icon i').on('click touchstart', function() {

      if (!panelRunning) {

        var target = $(this).parent().attr('data-target');
        var active = $('#panels-1-block .active').first().parent().attr('data-target');

        if (target != active) {
          panelRunning = true;

          $('#panels-1-block .panel-1-icon i').each(function() {
            $(this).removeClass('active');
          });

          $(this).addClass('active');
          $(active).fadeOut(500, function() {
            $(target).fadeIn(500, function() {
              panelRunning = false;
            });
          });

        }
      }
    });
    // End of Panel Version 1

    // prevent the # links to scroll to the top of the page
    $("[href=#]").click(function(e) {
      e.preventDefault();
    });

    $("[data-toggle=popover]").popover();

    $("[data-toggle=tooltip]").tooltip();

    // buttons loading
    $('.btn-loading').click(function () {
      var btn = $(this)
      btn.button('loading')
      setTimeout(function () {
        btn.button('reset')
      }, 3000)
    });

    if (jQuery().placeholder) {
      $('input, textarea').placeholder();
    }

  });

})(jQuery);

// Google maps goodness
jQuery(window).load(function() {
  "use strict";

  if (document.getElementById('map_canvas')) {

    var gLatitude = 40.787278;
    var gLongitude = -73.969722;
    var gZoom = 14;
    var gTitle = 'Bracara';
    var gDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    var latlng = new google.maps.LatLng(gLatitude, gLongitude);

    var settings = {
      zoom: parseInt(gZoom),
      center: latlng,
      scrollwheel: false,
      mapTypeControl: true,
      mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
      navigationControl: true,
      navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), settings);

    var companyLogo = new google.maps.MarkerImage('img/google-maps/map-marker.png',
                                                  new google.maps.Size(20,30),
                                                  new google.maps.Point(0,0),
                                                  new google.maps.Point(10,30));

    var companyMarker = new google.maps.Marker({
      position: latlng,
           map: map,
          icon: companyLogo,
         title: gTitle
    });

    var contentString = '<div id="content-map">'+
        '<h3 style="margin-top: 0px;">' + gTitle + '</h3>'+
        '<p>' + gDescription + '</p>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(companyMarker, 'click', function() {
      infowindow.open(map,companyMarker);
    });

  }

});
