var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/colmeow.png') {
      myImage.setAttribute ('src','images/the-colonel.png');
    } else {
      myImage.setAttribute ('src','images/colmeow.png');
    }
}