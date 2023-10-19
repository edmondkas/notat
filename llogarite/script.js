
function myDel() {
  var elements = document.getElementsByTagName("input");

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].type === "text") {
      elements[i].value = "";
    }
  }
}

var data = new Date();

// Merrni vitin aktual
var viti = data.getFullYear();

// Gjej elementin <p> me ID "viti-aktual"
var pElement = document.getElementById("viti-aktual");

// Vendos vitin aktual si tekst në elementin <p>
pElement.textContent = "\u00A9 " + viti + " Edmond Kastrati";
