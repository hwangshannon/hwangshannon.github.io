window.addEventListener('load', function () {
    var rotates = document.getElementsByClassName('h1sideways');
    for (var i = 0; i < rotates.length; i++) {
        rotates[i].style.height = rotates[i].offsetWidth + 'px';
    }

    var acc = document.getElementById("accordion");
    acc.onclick = function() {
        acc.classList.toggle("active");
        if (acc.innerHTML=="more") acc.innerHTML = "less";
        else acc.innerHTML = "more";
        var panel = document.getElementById('panel');
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    $('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});

function openModal(modalID, element) {
  document.getElementById(modalID).style.display = "block";
  showSlides(1, element);
}
// Close the Modal
function closeModal(modalID) {
  document.getElementById(modalID).style.display = "none";
}

var slideIndex = 1;

// Next/previous controls
function plusSlides(n, element) {
  showSlides(slideIndex += n, element);
}

function showSlides(n, element) {
  var i;
  var slides = document.getElementsByClassName(element);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}
