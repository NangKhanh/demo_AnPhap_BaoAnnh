let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.intro > *');
    var delay = 500; // Thời gian trễ giữa các hiệu ứng fade in (ms)
    var duration = 1000; // Thời gian của hiệu ứng fade in (ms)
    var index = 0;

    function fadeInNext() {
        if (index < elements.length) {
            elements[index].classList.add('fade-in');
            index++;
            setTimeout(fadeInNext, delay + duration);
        }
    }

    fadeInNext();
});
