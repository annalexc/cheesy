$(function(){
  setCheeseHierarchy();
  window.onresize = initCheeseWheel;
  $('#title').css({
    'margin-top': '0%'
    });
  setTimeout(function(){
    titleSlide()
  }, 1800);


});

function titleSlide(){
  

  $('#title').animate({
    'margin-top': '-100%'
  }, 2500);
}

function setLinkListener(){
  $('svg').on('click', function(){
    console.log("You clicked a link!");
  })
}