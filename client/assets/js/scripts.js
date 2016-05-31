$(function(){
  $('#title').css({
    'margin-top': '0%'
  });
  checkWidth();
  setCheeseHierarchy();
  window.onresize = initCheeseWheel;
  
  $('#cheese-img').css({
    'opacity': '0'
    });

  setTimeout(function(){
    titleSlide();
  }, 1800, "linear");

  setTimeout(function(){
    cheeseFade();
  }, 1800);

});

var $window = $(window);
var marginTop;

function titleSlide(){
  $('#title').animate({
    'margin-top': marginTop
  }, 2500);
};

function cheeseFade(){
  $('#cheese-img').animate({
    'opacity': '0.5'
  }, 2500);
};


function checkWidth(){
  var windowSize = $window.width();
  if (windowSize < 570) {
     marginTop = '-179%';
  } else if (windowSize < 780) {
    marginTop = '-150%';
  } else {
    marginTop = '-100%';
  }
};

// $(window).resize(checkWidth);