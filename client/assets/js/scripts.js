$(function(){
  setCheeseHierarchy();
  window.onresize = initCheeseWheel;
  $('#title').css({
    'margin-top': '0%'
    });

  $('#cheese-img').css({
    'opacity': '0'
    });

  setTimeout(function(){
    titleSlide()
  }, 1800, "linear");
  setTimeout(function(){
    cheeseFade()
  }, 1800);

});

function titleSlide(){
  $('#title').animate({
    'margin-top': '-100%'
  }, 2500);
};

function cheeseFade(){
  $('#cheese-img').animate({
    'opacity': '0.5'
  }, 2500);
};