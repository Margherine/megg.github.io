var scrollbar = getElementById('scrollbar');

function changeImage(event) {
  event = event || window.event;
  var targetElement = event.target || event.srcElement;

    if(targetElement.tagName == "IMG"){
      document.getElementById('piclarge').src = targetElement.getAttribute("src");
    }

}

scrollbar.onclick ="changeImage(event)"
