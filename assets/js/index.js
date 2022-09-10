function showListSideBar(a) {
	if (a > 1) {
		return `
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/FMv4tTIpfwB.png" alt="">
                        <h6 class="bs__list--item-text">Chiến dịch gây quỹ</h6>
                    </a>
                </li>
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/JQCVtO0LVjk.png" alt="">
                        <h6 class="bs__list--item-text">Chơi game</h6>
                    </a>
                </li>
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png" alt="">
                        <h6 class="bs__list--item-text">Đã lưu</h6>
                    </a>
                </li>
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/vWBUs7aYAiK.png" alt="">
                        <h6 class="bs__list--item-text">Facebook Pay</h6>
                    </a>
                </li>
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/cbPxeioybsd.png" alt="">
                        <h6 class="bs__list--item-text">Hoạt động quảng cáo gần đây</h6>
                    </a>
                </li>
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/ocBBGg-gRd5.png" alt="">
                        <h6 class="bs__list--item-text">Messenger</h6>
                    </a>
                </li>
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/QILj4kKZMLW.png" alt="">
                        <h6 class="bs__list--item-text">Sự kiện</h6>
                    </a>
                </li>
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/z2lQL_jKCWe.png" alt="">
                        <h6 class="bs__list--item-text">Sức khoẻ cảm xúc</h6>
                    </a>
                </li>
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png" alt="">
                        <h6 class="bs__list--item-text">Trang</h6>
                    </a>
                </li>
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/C949oxkze-S.png" alt="">
                        <h6 class="bs__list--item-text">Trình quản lí quảng cáo</h6>
                    </a>
                </li>
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/lqymE2iRETE.png" alt="">
                        <h6 class="bs__list--item-text">Trung tâm quảng cáo</h6>
                    </a>
                </li>
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
<img src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/vG0kc45wHaG.png" alt="">
                        <h6 class="bs__list--item-text">Ứng phó khẩn cấp</h6>
                    </a>
                </li>
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
<img src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/Cx_zTHRcUJ0.png" alt="">
                        <h6 class="bs__list--item-text">Video chơi game</h6>
                    </a>
                </li>
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/VhoyAd0w8bZ.png                                                                                  " alt="">
                        <h6 class="bs__list--item-text">Video trực tiếp</h6>
                    </a>
                </li>
                <li class="bs__list--item">
                    <a href="#" class="bs__list--item-link">
<img src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/nbUcQfHcgBv.png" alt="">
                        <h6 class="bs__list--item-text">Yêu thích</h6>
                    </a>
                </li>                    
    `;
	} else {
		return ``;
	}
	//
}
const showSideBar = document.querySelector(".button_show");
const hideSidebar = document.querySelector(".button_hide");
const listItem = document.querySelector(".bs__list--hide");

showSideBar.addEventListener("click", () => {
	hideSidebar.style.display = "flex";
	showSideBar.style.display = "none";
	return (listItem.innerHTML = showListSideBar(2));
});
hideSidebar.addEventListener("click", () => {
	hideSidebar.style.display = "none";
	showSideBar.style.display = "flex";
	return (listItem.innerHTML = showListSideBar(0));
});


