const buttonWrap = document.getElementById("button");

const btnNum = buttonWrap.getElementsByClassName("btn-num");

for (var i = 0; i < btnNum.length; i++) {
  btnNum[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function rating() {
  const body = document.getElementsByTagName(body);
  body.classList.toggle("thank-you");
}

const submitBtn = document.getElementById("submit");
const rateCard = document.getElementById("card");
const thanksCard = document.querySelector(".thank-you");
const result = document.getElementById("rating");
const buttonNum = document.querySelectorAll(".btn-num");

let click = false;
buttonNum.forEach((number) => {
  number.addEventListener("click" , () =>{
    result.innerHTML = number.innerHTML;
    click = true;
  })
})

submitBtn.addEventListener("click", () => {
  if(click){
    thanksCard.classList.remove("hidden");
    rateCard.classList.add("hidden");
  }
});