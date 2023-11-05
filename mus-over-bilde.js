function bigImg(x) {
    x.style.height = "101%";
    x.style.width = "102%";
  }
  
  function normalImg(x) {
    x.style.height = "100%";
    x.style.width = "100%";
  }
  function textOverBildet() {
    var x = document.getElementsByClassName("textOverBildetCLASS");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }