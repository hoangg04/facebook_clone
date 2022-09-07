let buttonTab = document.querySelectorAll(".mid-header__tab--list-item");
let contentTab = document.querySelectorAll(".mid-header__tab-content-item");

buttonTab.forEach(function (el) {
	el.addEventListener("click", openTabs);
});
function openTabs(el) {
	var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
	var tab = btn.dataset.tab; // lấy giá trị trong data-tab
	contentTab.forEach(function (el) {
		el.classList.remove("active__tab-content");
	});
	buttonTab.forEach(function (el) {
		el.classList.remove("active_tab");
	});
	document.querySelector("#" + tab).classList.add("active__tab-content");
	btn.classList.add("active_tab");
}

