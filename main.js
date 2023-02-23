var buttonWrap = document.getElementById("button");

var btnNum = buttonWrap.getElementsByClassName("btn-num");

for (var i = 0; i < btnNum.length; i++) {
  btnNum[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
