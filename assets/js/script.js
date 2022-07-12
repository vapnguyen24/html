var btn = document.getElementsByClassName("btn-slide");
var slide = document.getElementById("slide");
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
console.log(slide.clientWidth);
btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  // for(i = 0; i < 5; i++) {
  //     btn[i].classList.remove("active");
  // }
  // this.classList.add("active")
};

btn[1].onclick = function () {
  slide.style.transform = "translateX(" + -slide.clientWidth / 4 + "px)";
  // for(i = 0; i < 5; i++) {
  //     btn[i].classList.remove("active");
  // }
  // this.classList.add("active")
};

btn[2].onclick = function () {
  slide.style.transform = "translateX(" + -slide.clientWidth / 2 + "px)";
  // for(i = 0; i < 5; i++) {
  //     btn[i].classList.remove("active");
  // }
  // this.classList.add("active")
};

btn[3].onclick = function () {
  slide.style.transform =
    "translateX(" + (-slide.clientWidth / 1 - -slide.clientWidth / 4) + "px)";
  // for(i = 0; i < 5; i++) {
  //     btn[i].classList.remove("active");
  // }
  // this.classList.add("active")
};

btn[4].onclick = function () {
  slide1.style.transform = "translateX(0px)";
  // for(i = 0; i < 5; i++) {
  //     btn[i].classList.remove("active");
  // }
  // this.classList.add("active")
};

btn[5].onclick = function () {
  slide1.style.transform = "translateX(" + -slide1.clientWidth / 4 + "px)";
  // for(i = 0; i < 5; i++) {
  //     btn[i].classList.remove("active");
  // }
  // this.classList.add("active")
};

btn[6].onclick = function () {
  slide1.style.transform = "translateX(" + -slide1.clientWidth / 2 + "px)";
  // for(i = 0; i < 5; i++) {
  //     btn[i].classList.remove("active");
  // }
  // this.classList.add("active")
};

btn[7].onclick = function () {
  slide1.style.transform =
    "translateX(" + (-slide1.clientWidth / 1 - -slide1.clientWidth / 4) + "px)";
  // for(i = 0; i < 5; i++) {
  //     btn[i].classList.remove("active");
  // }
  // this.classList.add("active")
};

btn[8].onclick = function () {
  slide2.style.transform = "translateX(0px)";
  // for(i = 0; i < 5; i++) {
  //     btn[i].classList.remove("active");
  // }
  // this.classList.add("active")
};

btn[9].onclick = function () {
  slide2.style.transform = "translateX(" + -slide2.clientWidth / 4 + "px)";
  // for(i = 0; i < 5; i++) {
  //     btn[i].classList.remove("active");
  // }
  // this.classList.add("active")
};

btn[10].onclick = function () {
  slide2.style.transform = "translateX(" + -slide2.clientWidth / 2 + "px)";
  // for(i = 0; i < 5; i++) {
  //     btn[i].classList.remove("active");
  // }
  // this.classList.add("active")
};

btn[11].onclick = function () {
  slide2.style.transform =
    "translateX(" + (-slide2.clientWidth / 1 - -slide2.clientWidth / 4) + "px)";
  // for(i = 0; i < 5; i++) {
  //     btn[i].classList.remove("active");
  // }
  // this.classList.add("active")
};
