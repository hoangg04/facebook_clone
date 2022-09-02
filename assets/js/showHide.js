let show = document.querySelector("#seemore");
let clickShow = document.querySelector(".button-show");
let clickHide = document.querySelector(".button-hide");
clickShow.addEventListener("click", () => {
	show.style.height = "100%";
	clickShow.style.opacity = "0";
	clickHide.style.opacity = "1";
	clickHide.style.zIndex = "4";
	clickShow.style.zIndex = "3";
	hi.innerHTML = abc(2);
});
clickHide.addEventListener("click", () => {
	show.style.height = "50%";
	clickShow.style.opacity = "1";
	clickHide.style.opacity = "0";
	clickHide.style.zIndex = "3";
	clickShow.style.zIndex = "4";
	hi.innerHTML = abc(1);
});
