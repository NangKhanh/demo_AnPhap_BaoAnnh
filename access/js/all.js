let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

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
function topFunction2() {
  document.getElementById("body").scrollTop = 0; // For Safari
  document.getElementById("body").scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// document.addEventListener("DOMContentLoaded", function() {
//     var elements = document.querySelectorAll('.intro > *');
//     var delay = 500; // Thời gian trễ giữa các hiệu ứng fade in (ms)
//     var duration = 1000; // Thời gian của hiệu ứng fade in (ms)
//     var index = 0;

//     function fadeInNext() {
//         if (index < elements.length) {
//             elements[index].classList.add('fade-in');
//             index++;
//             setTimeout(fadeInNext, delay + duration);
//         }
//     }

//     fadeInNext();
// });

// $(document).ready(function () {
//   $('a[href*=\\#]').on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({
//       scrollTop: $(this.hash).offset().top
//     }, 500);
//   });
// });


// right click
const contextMenu = document.querySelector(".wrapper")

window.addEventListener("contextmenu", e => {
  e.preventDefault();

  // Lấy vị trí con trỏ chuột, bao gồm cả phần đã cuộn
  let x = e.pageX, y = e.pageY;

  // Lấy kích thước cửa sổ và menu
  let winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    cmWidth = contextMenu.offsetWidth,
    cmHeight = contextMenu.offsetHeight;



  // Điều chỉnh vị trí x nếu menu tràn ra ngoài cửa sổ
  if (x + cmWidth > winWidth) {
    x = winWidth - cmWidth;
  }

  // Điều chỉnh vị trí y nếu menu tràn ra ngoài cửa sổ
  if (y + cmHeight > winHeight + window.scrollY) {
    y = winHeight + window.scrollY - cmHeight;
  }

  // Đặt vị trí cho contextMenu
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
});

// Ẩn contextMenu khi nhấp chuột ra ngoài
document.addEventListener("click", () => {
  contextMenu.style.visibility = "hidden";
});

// 
jQuery(document).ready(function (e) {
  //Vô hiệu hóa: cut copy paste
  jQuery('body').bind('cut copy paste', function (e) { // vô hiệu hóa trên toàn bộ web
    e.preventDefault(); return false;
  });
  jQuery('#id_tag').bind('cut copy paste', function (e) { // vô hiệu hóa trên 1 thẻ được chỉ định ID
    e.preventDefault(); return false;
  });


  // //Vô hiệu hóa: chuột phải
  // jQuery("body").on("contextmenu", function (e) { // vô hiệu hóa trên toàn bộ web
  //   return false;
  // });
  jQuery('#id_tag').on("contextmenu", function (e) { // vô hiệu hóa trên 1 thẻ được chỉ định ID
    return false;
  });
  $('#mark').on('mousedown', function (event) {
    // Ngăn chặn hành vi mất selection
    event.preventDefault();

    // Lấy nội dung được bôi đen
    var selectedText = window.getSelection().toString();

    if (selectedText) {
      // Lưu nội dung vào local storage
      var highlightedTexts = JSON.parse(localStorage.getItem('highlightedTexts')) || [];

      // Thêm đoạn văn bản mới vào danh sách
      highlightedTexts.push(selectedText);

      // Lưu danh sách mới vào local storage
      localStorage.setItem('highlightedTexts', JSON.stringify(highlightedTexts));

      alert('Đã lưu nội dung: ' + selectedText);
    } else {
      alert('Vui lòng bôi đen văn bản trước khi nhấn Mark.');
    }
  });
});
// function saveSelection() {
//   var selectedText = window.getSelection().toString();
//   if (selectedText) {
//     localStorage.setItem('highlightedText', selectedText);
//     alert('Đã lưu nội dung: ' + selectedText);
//   } else {
//     alert('Vui lòng bôi đen văn bản trước khi nhấn Mark.');
//   }
// }

// // Xử lý sự kiện khi người dùng chọn menu tùy chỉnh (context menu)
// document.addEventListener("contextmenu", function (event) {
//   event.preventDefault();
//   var contextMenu = document.getElementById("context-menu");
//   contextMenu.style.display = "block";
//   contextMenu.style.left = event.pageX + "px";
//   contextMenu.style.top = event.pageY + "px";
// });

// // Sự kiện khi chọn "Mark" từ menu tùy chỉnh
// document.getElementById("mark").addEventListener("click", function (event) {
//   saveSelection();
//   document.getElementById("context-menu").style.display = "none"; // Ẩn menu tùy chỉnh
// });

$(document).ready(function () {
  $('#openMark').on('click', function () {
    const highlightedTexts = JSON.parse(localStorage.getItem('highlightedTexts')) || [];
    const modalBody = $('#modalBody');
    modalBody.empty();
    if (highlightedTexts.length === 0) {
      modalBody.append('<p>No highlighted texts found.</p>');
    } else {
      const ul = $('<ul></ul>');
      highlightedTexts.forEach(function (text) {
        ul.append('<li>' + text + '</li>');
      });
      modalBody.append(ul);
    }
  });

  $('#clearMark').on('click', function () {
    localStorage.removeItem('highlightedTexts');
    $('#modalBody').empty().append('<p>No highlighted texts found.</p>');
  });
});

function changeMode(mode) {
  var body = document.getElementById('body');
  var ul = document.getElementById('ul');
  var paragraphs = document.getElementsByTagName('p');
  var spans = document.getElementsByTagName('span');
  // var ul = document.getElementsByTagName('ul');
  // var a = document.getElementsByTagName('a');

  if (mode === 'light') {
    // body.style.backgroundColor = 'white';
    // ul.style.backgroundColor = 'white';
    body.style.color = 'white';
    // ul.style.color = 'white';

    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = 'white';
    }

    for (var i = 0; i < spans.length; i++) {
      spans[i].style.color = 'white';
    }
  } else if (mode === 'dark') {
    // body.style.backgroundColor = '#B81E24';
    // body.style.color = 'white';

    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = 'black';
    }

    for (var i = 0; i < spans.length; i++) {
      spans[i].style.color = 'black';
    }
  }
}

function changeFont(font) {
  var paragraphs = document.getElementsByTagName('p');
  var spans = document.getElementsByTagName('span');

  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontFamily = font;
  }

  for (var i = 0; i < spans.length; i++) {
    spans[i].style.fontFamily = font;
  }
}


var currentIndex = -1;
var foundElements = [];

function search() {
  clearHighlights();

  // Get search value
  var searchValue = document.getElementById('value').value.toLowerCase();
  if (!searchValue) return;

  // Get all text nodes
  var body = document.body;
  var textNodes = getTextNodes(body);

  foundElements = [];
  textNodes.forEach(function (node) {
    var parentNode = node.parentNode;
    var text = node.nodeValue.toLowerCase();
    var index = text.indexOf(searchValue);

    if (index !== -1) {
      var originalText = node.nodeValue;
      var span = document.createElement('span');
      span.className = 'highlight';
      span.innerText = originalText.substring(index, index + searchValue.length);

      var before = document.createTextNode(originalText.substring(0, index));
      var after = document.createTextNode(originalText.substring(index + searchValue.length));

      parentNode.replaceChild(after, node);
      parentNode.insertBefore(span, after);
      parentNode.insertBefore(before, span);

      foundElements.push(span);
    }
  });

  if (foundElements.length > 0) {
    currentIndex = 0;
    scrollToElement(foundElements[currentIndex]);
    document.getElementById('nextButton').style.display = 'inline-block';
    document.getElementById('clearButton').style.display = 'inline-block';
  } else {
    currentIndex = -1;
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('clearButton').style.display = 'none';
  }
}

function next() {
  if (foundElements.length > 0) {
    currentIndex = (currentIndex + 1) % foundElements.length;
    scrollToElement(foundElements[currentIndex]);
  }
}

function clearSearch() {
  clearHighlights();
  document.getElementById('value').value = '';
  currentIndex = -1;
  foundElements = [];
  document.getElementById('nextButton').style.display = 'none';
  document.getElementById('clearButton').style.display = 'none';
}

function clearHighlights() {
  var highlighted = document.querySelectorAll('.highlight');
  highlighted.forEach(function (element) {
    element.classList.remove('highlight');
    var text = element.innerText;
    var parent = element.parentNode;
    parent.replaceChild(document.createTextNode(text), element);
    parent.normalize();
  });
}

function scrollToElement(element) {
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function getTextNodes(node) {
  var textNodes = [];
  if (node.nodeType == Node.TEXT_NODE) {
    textNodes.push(node);
  } else {
    var children = node.childNodes;
    for (var i = 0; i < children.length; i++) {
      textNodes.push.apply(textNodes, getTextNodes(children[i]));
    }
  }
  return textNodes;
}
$(document).ready(function () {
  $('#decrease-font').click(function () {
    $('p, span').css('font-size', function (index, value) {
      return (parseInt(value) - 2) + 'px';
    });
  });

  $('#increase-font').click(function () {
    $('p, span').css('font-size', function (index, value) {
      return (parseInt(value) + 2) + 'px';
    });
  });
});

