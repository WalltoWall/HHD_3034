// @codekit-prepend "../bower_components/smoothstate/jquery.smoothState.js"
// @codekit-prepend "../bower_components/animsition/dist/js/jquery.animsition.min.js"
// @codekit-prepend "../bower_components/prettyembeds/jquery.prettyembed.min.js"
// @codekit-prepend "../bower_components/fitvids/jquery.fitvids.js"
$(document).foundation({
  orbit: {
    animation: 'slide',
    timer_speed: 1500,
    pause_on_hover: false,
    resume_on_mouseout: true,
    navigation_arrows: false,
    bullets: false,
    slide_number: false,
    timer: true
  }
});
$(document).ready(function() {
  setTimeout(function() {
      $(".sausage-orbit").click();
  }, 4000);
  // $(".animsition").animsition({
    
  //     inClass               :   'fade-in',
  //     outClass              :   'fade-out',
  //     inDuration            :    600,
  //     outDuration           :    400,
  //     linkElement           :   '.animsition-link',
  //     // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
  //     loading               :    true,
  //     loadingParentElement  :   'body', //animsition wrapper element
  //     loadingClass          :   'animsition-loading',
  //     unSupportCss          : [ 'animation-duration',
  //                               '-webkit-animation-duration',
  //                               '-o-animation-duration'
  //                             ],
  //     //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
  //     //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      
  //     overlay               :   false,
      
  //     overlayClass          :   'animsition-overlay-slide',
  //     overlayParentElement  :   'body'
  // });

  // Fit Vid
  $("#videoPlayer").fitVids();

  // Pretty Embed
  $().prettyEmbed({ 
    useFitVids: true,
    showInfo: false,
    showRelated: false 
  });

});
