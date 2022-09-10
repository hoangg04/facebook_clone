//History Action
let actionInput = document.getElementById("input_search"),
	divSearch = document.querySelector(".nav_search"),
	showHistory = document.querySelector(".history_search"),
	closeShow = document.querySelector(".history-search-close"),
	deleteShow = document.querySelectorAll(".history-item-delete"),
	activeLabel = document.querySelector(".form_label"),
	labelText = document.querySelector(".form_label-text"),
	modal = document.querySelector("body");

//Menu Action
let openMenu = document.querySelector(".nav_menu-icon"),
	showMenu = document.querySelector(".menu_container"),
	closeMenu = document.querySelector(".close_menu");
//Messenger Action
let openChat = document.querySelector(".nav_messenger-icon"),
	closeChat = document.querySelector(".close_messenger"),
	showChat = document.querySelector(".messenger_container");
//Notify Action
let openNotify = document.querySelector(".nav_notify-icon"),
	closeNotify = document.querySelector(".close_notify"),
	showNotify = document.querySelector(".notify_container");

//user
let openSetting = document.querySelector(".nav_user"),
	closeSetting = document.querySelector(".close_user"),
	showSetting = document.querySelector(".nav_user-container");

actionInput.addEventListener(
	"click",
	(e) => {
		divSearch.setAttribute("style", "width: 25rem !important");
		if (window.innerWidth < 1028) {
			labelText.setAttribute("style", "display:-webkit-box !important");
			activeLabel.setAttribute(
				"style",
				"margin : 0 1.5rem;justify-content:flex-start"
			);
		}
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
	divSearch.setAttribute("style", "width: max-content");
	if (window.innerWidth < 1028) {
		labelText.setAttribute("style", "display:none !important");
	} else {
		labelText.setAttribute("style", "display:-webkit-box !important");
	}
	activeLabel.setAttribute("style", "margin : 0");
});

deleteShow.forEach((item) => {
	item.addEventListener("click", () => {
		showHistory.style.display = "none";
		divSearch.setAttribute("style", "width: max-content");
		if (window.innerWidth < 1028) {
			labelText.setAttribute("style", "display:none !important");
		}
		activeLabel.setAttribute("style", "margin : 0");
	});
});
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
	divSearch.setAttribute("style", "width: max-content");
	if (window.innerWidth < 1028) {
		labelText.setAttribute("style", "display:none !important");
	} else {
		labelText.setAttribute("style", "display:-webkit-box !important");
	}
	activeLabel.setAttribute("style", "margin : 0");
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
	divSearch.setAttribute("style", "width: max-content");
	if (window.innerWidth < 1028) {
		labelText.setAttribute("style", "display:none !important");
	} else {
		labelText.setAttribute("style", "display:-webkit-box !important");
	}
	activeLabel.setAttribute("style", "margin : 0");
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
	divSearch.setAttribute("style", "width: max-content");
	if (window.innerWidth < 1028) {
		labelText.setAttribute("style", "display:none !important");
	} else {
		labelText.setAttribute("style", "display:-webkit-box !important");
	}
	activeLabel.setAttribute("style", "margin : 0");
	e.stopPropagation();
});
//close chat
closeChat.addEventListener("click", (e) => {
	showChat.style.display = "none";
	closeChat.style.width = "0px";
	closeChat.style.height = "0px";
	openChat.classList.remove("active_action");
	divSearch.setAttribute("style", "width: max-content");
	if (window.innerWidth < 1028) {
		labelText.setAttribute("style", "display:none !important");
	} else {
		labelText.setAttribute("style", "display:-webkit-box !important");
	}
	activeLabel.setAttribute("style", "margin : 0");
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
	divSearch.setAttribute("style", "width: max-content");
	if (window.innerWidth < 1028) {
		labelText.setAttribute("style", "display:none !important");
	} else {
		labelText.setAttribute("style", "display:-webkit-box !important");
	}
	activeLabel.setAttribute("style", "margin : 0");
	e.stopPropagation();
});
// close Notify
closeNotify.addEventListener("click", (e) => {
	showNotify.style.display = "none";
	closeNotify.style.width = "0px";
	closeNotify.style.height = "0px";
	openNotify.classList.remove("active_action");
	divSearch.setAttribute("style", "width: max-content");
	if (window.innerWidth < 1028) {
		labelText.setAttribute("style", "display:none !important");
	} else {
		labelText.setAttribute("style", "display:-webkit-box !important");
	}
	activeLabel.setAttribute("style", "margin : 0");
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
	divSearch.setAttribute("style", "width: max-content");
	if (window.innerWidth < 1028) {
		labelText.setAttribute("style", "display:none !important");
	} else {
		labelText.setAttribute("style", "display:-webkit-box !important");
	}
	activeLabel.setAttribute("style", "margin : 0");
	e.stopPropagation();
});
// close Setting
closeSetting.addEventListener("click", (e) => {
	showSetting.style.display = "none";
	closeSetting.style.width = "0px";
	closeSetting.style.height = "0px";
	divSearch.setAttribute("style", "width: max-content");
	if (window.innerWidth < 1028) {
		labelText.setAttribute("style", "display:none !important");
	} else {
		labelText.setAttribute("style", "display:-webkit-box !important");
	}
	activeLabel.setAttribute("style", "margin : 0");
	e.stopPropagation();
});

showSetting.addEventListener("click", (event) => {
	event.stopPropagation();
});

if (window.innerWidth > 1028) {
	labelText.setAttribute("style", "display:-webkit-box !important");
	// return true;
}
else{
	labelText.setAttribute("style", "display:none !important");
	// return true;
}
