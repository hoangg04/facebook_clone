let tab = document.querySelectorAll(".nav_list-item"),
	showSideBarLeft = document.querySelector(".nav_list-item-open"),
	closeSideBarLeft = document.querySelector(".nav_list-item-close"),
	sideBarLeft = document.querySelector(".side-bar__left");


showSideBarLeft.addEventListener("click", () => {
	sideBarLeft.style.display = "block";
	closeSideBarLeft.style.width = "100%";
	closeSideBarLeft.style.height = "100%";
	showSideBarLeft.classList.add("active");
},true);

closeSideBarLeft.addEventListener("click", () => {
	sideBarLeft.style.display = "none";
	closeSideBarLeft.style.width = "0px";
	closeSideBarLeft.style.height = "0px";
    showSideBarLeft.classList.remove("active");
});
