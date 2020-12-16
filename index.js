
var button_length = document.querySelectorAll(".drum").length;
for (var i = 0; i < button_length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener("click",function (event) {
    console.log(event)
    var buttonInnerHtml = this.innerHTML;
    make_sound(buttonInnerHtml);
    ButtonAnimation(buttonInnerHtml);

 });

document.addEventListener("keypress", function(event){
  make_sound(event.key)
  ButtonAnimation(event.key)
})


function make_sound(key) {

  switch (key) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    default:
    console.log(buttonInnerHtml)

  }

}

function ButtonAnimation(key) {

  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)

}






















}
