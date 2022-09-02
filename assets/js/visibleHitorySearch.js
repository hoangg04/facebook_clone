//History Action
let actionInput = document.getElementById("input_search");
let showHistory = document.querySelector(".history_search");
let closeShow = document.querySelector(".history-search-close");
let deleteShow = document.querySelectorAll(".history-item-delete");
let activeLabel = document.querySelector(".form_label");
let modal = document.querySelector("body");

//Menu Action
let openMenu = document.querySelector(".nav_menu-icon");
let showMenu = document.querySelector(".menu_container");
let closeMenu = document.querySelector(".close_menu");
//Messenger Action
let openChat = document.querySelector(".nav_messenger-icon");
let closeChat = document.querySelector(".close_messenger");
let showChat = document.querySelector(".messenger_container");
//Notify Action
let openNotify = document.querySelector(".nav_notify-icon");
let closeNotify = document.querySelector(".close_notify");
let showNotify = document.querySelector(".notify_container");

//user
let openSetting = document.querySelector(".nav_user");
let closeSetting = document.querySelector(".close_user");
let showSetting = document.querySelector(".nav_user-container");

actionInput.addEventListener(
	"click",
	(e) => {
		showHistory.style.display = "block";
		showChat.style.display = "none";
		showMenu.style.display = "none";
		showNotify.style.display = "none";
		showSetting.style.display = "none";
		closeMenu.style.width = "0px";
		closeMenu.style.height = "0px";
		closeChat.style.width = "0px";
		closeChat.style.height = "0px";
		closeMenu.style.width = "0px";
		closeMenu.style.height = "0px";
		closeSetting.style.width = "0px";
		closeSetting.style.height = "0px";
		openMenu.classList.remove("active_action");
		openChat.classList.remove("active_action");
		openNotify.classList.remove("active_action");
		e.stopPropagation();
	},
	true
);
showHistory.addEventListener("click", (event) => {
	event.stopPropagation();
});
closeShow.addEventListener("click", () => {
	showHistory.style.display = "none";
});

deleteShow.forEach((item) =>{
	item.addEventListener('click',()=>{
		showHistory.style.display = "none"
	})
})
modal.addEventListener("click", () => {
	showHistory.style.display = "none";
	showSetting.style.display = "none";
	showChat.style.display = "none";
	showMenu.style.display = "none";
	showNotify.style.display = "none";
	openMenu.classList.remove("active_action");
	openChat.classList.remove("active_action");
	openNotify.classList.remove("active_action");
	closeMenu.style.width = "0px";
	closeMenu.style.height = "0px";
	closeChat.style.width = "0px";
	closeChat.style.height = "0px";
	closeMenu.style.width = "0px";
	closeMenu.style.height = "0px";
	closeNotify.style.width = "0px";
	closeNotify.style.height = "0px";
	closeSetting.style.width = "0px";
	closeSetting.style.height = "0px";
});

//open menu
openMenu.addEventListener("click", (e) => {
	showMenu.style.display = "block";
	showHistory.style.display = "none";
	showChat.style.display = "none";
	showNotify.style.display = "none";
	showSetting.style.display = "none";
	closeMenu.style.width = "100%";
	closeMenu.style.height = "100%";
	closeChat.style.width = "0px";
	closeChat.style.height = "0px";
	closeNotify.style.width = "0px";
	closeNotify.style.height = "0px";
	closeSetting.style.width = "0px";
	closeSetting.style.height = "0px";
	openMenu.classList.add("active_action");
	openChat.classList.remove("active_action");
	openNotify.classList.remove("active_action");

	e.stopPropagation();
});
//close menu
closeMenu.addEventListener("click", (e) => {
	showMenu.style.display = "none";
	closeMenu.style.width = "0px";
	closeMenu.style.height = "0px";
	e.stopPropagation();
	openMenu.classList.remove("active_action");
});
showMenu.addEventListener("click", (event) => {
	event.stopPropagation();
});
//open chat
openChat.addEventListener("click", (e) => {
	showMenu.style.display = "none";
	showHistory.style.display = "none";
	showChat.style.display = "flex";
	showNotify.style.display = "none";
	showSetting.style.display = "none";
	closeChat.style.width = "100%";
	closeChat.style.height = "100%";
	closeMenu.style.width = "0px";
	closeMenu.style.height = "0px";
	closeNotify.style.width = "0px";
	closeNotify.style.height = "0px";
	closeSetting.style.width = "0px";
	closeSetting.style.height = "0px";
	openMenu.classList.remove("active_action");
	openChat.classList.add("active_action");
	openNotify.classList.remove("active_action");
	e.stopPropagation();
});
//close chat
closeChat.addEventListener("click", (e) => {
	showChat.style.display = "none";
	closeChat.style.width = "0px";
	closeChat.style.height = "0px";
	openChat.classList.remove("active_action");

	e.stopPropagation();
});

showChat.addEventListener("click", (event) => {
	event.stopPropagation();
});

// open notification
openNotify.addEventListener("click", (e) => {
	showMenu.style.display = "none";
	showHistory.style.display = "none";
	showChat.style.display = "none";
	showSetting.style.display = "none";
	showNotify.style.display = "flex";
	closeNotify.style.width = "100%";
	closeNotify.style.height = "100%";
	closeMenu.style.width = "0px";
	closeMenu.style.height = "0px";
	closeChat.style.width = "0px";
	closeChat.style.height = "0px";
	closeSetting.style.width = "0px";
	closeSetting.style.height = "0px";
	openMenu.classList.remove("active_action");
	openNotify.classList.add("active_action");
	openChat.classList.remove("active_action");

	e.stopPropagation();
});
// close Notify
closeNotify.addEventListener("click", (e) => {
	showNotify.style.display = "none";
	closeNotify.style.width = "0px";
	closeNotify.style.height = "0px";
	openNotify.classList.remove("active_action");
	e.stopPropagation();
});

showNotify.addEventListener("click", (event) => {
	event.stopPropagation();
});

//user
openSetting.addEventListener("click", (e) => {
	showMenu.style.display = "none";
	showHistory.style.display = "none";
	showChat.style.display = "none";
	showNotify.style.display = "none";
	showSetting.style.display = "block";
	closeSetting.style.width = "100%";
	closeSetting.style.height = "100%";
	closeMenu.style.width = "0px";
	closeMenu.style.height = "0px";
	closeChat.style.width = "0px";
	closeChat.style.height = "0px";
	closeNotify.style.width = "0px";
	closeNotify.style.height = "0px";
	openMenu.classList.remove("active_action");
	openNotify.classList.remove("active_action");
	openChat.classList.remove("active_action");
	e.stopPropagation();
});
// close Setting
closeSetting.addEventListener("click", (e) => {
	showSetting.style.display = "none";
	closeSetting.style.width = "0px";
	closeSetting.style.height = "0px";
	e.stopPropagation();
});

showSetting.addEventListener("click", (event) => {
	event.stopPropagation();
});
