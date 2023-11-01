function bigImg(x) {
    x.style.height = "101%";
    x.style.width = "102%";
  }
  
  function normalImg(x) {
    x.style.height = "100%";
    x.style.width = "100%";
  }
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}