let tab = document.querySelectorAll(".nav_list-item"),
	showSideBarLeft = document.querySelector(".nav_list-item-open"),
	closeSideBarLeft = document.querySelector(".nav_list-item-close"),
	boxScreen = document.querySelector(".box-screen");

showSideBarLeft.addEventListener(
	"click",
	() => {
		boxScreen.setAttribute('style','display:block !important')
		closeSideBarLeft.style.width = "100%";
		closeSideBarLeft.style.height = "100%";
		showSideBarLeft.classList.add("active");
	},
	true
);

closeSideBarLeft.addEventListener("click", () => {
	boxScreen.setAttribute("style", "display:none !important");
	closeSideBarLeft.style.width = "0px";
	closeSideBarLeft.style.height = "0px";
	showSideBarLeft.classList.remove("active");
});
