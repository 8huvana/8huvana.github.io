function wikipedia() {
    var parentDiv = document.getElementById('wiki');
    removeResults(parentDiv);
    var search = document.getElementById('search').value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + search;
  
    connect.open('GET', url);
  
    connect.onload = function () {
      var wikiObject = JSON.parse(this.response);
      console.log(wikiObject);
      console.log(wikiObject.query.pages);
      var pages = wikiObject.query.pages;
      for (i in pages) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute('class', 'row h4');
        document.getElementById("wiki").appendChild(newDiv);
        newDiv.innerText = pages[i].title;
       
      };
  
    }
    connect.send();

  function removeResults(parentDiv){
    while (parentDiv.firstChild) {
      parentDiv.removeChild(parentDiv.firstChild);
    }
  }}

var map = L.map('map').setView([35.602059, 35.785487], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([13.0827, 80.2707]).addTo(map);
