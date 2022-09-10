let defaultIcon = document.querySelectorAll(".feeling");
let replaceIcon = document.querySelectorAll(".icon-replace");
let icon = document.querySelectorAll(".mid__post-bottom--action-reaction");
let subText = document.querySelectorAll(".icon-sub-text");
let imgItem = document.querySelectorAll(".pick__reaction-item");
let boxFeeling = document.querySelectorAll(".pick__reaction");
let countFelling = document.querySelectorAll(".text-count");
let body = document.querySelector("body");
const listImg = [
	{
		icon: "like",
		text: "Thích",
		src: "./assets/img/reaction/like64.png",
		color: "#1b74e4",
	},
	{
		icon: "love",
		text: "Yêu thích",
		src: "./assets/img/reaction/love64.png",
		color: "#eb2646",
	},
	{
		icon: "haha",
		text: "Haha",
		src: "./assets/img/reaction/haha64.png",
		color: "#f7b125",
	},
	{
		icon: "sad",
		text: "Buồn",
		src: "./assets/img/reaction/sad.png",
		color: "#f7b125",
	},
	{
		icon: "angry",
		text: "Phẫn nộ",
		src: "./assets/img/reaction/angry64.png",
		color: "#e75b06",
	},
	{
		icon: "care",
		text: "Thương Thương",
		color: "#f7b125",
		src: "./assets/img/reaction/care64.png",
	},
	{
		icon: "wow",
		text: "Wow",
		src: "./assets/img/reaction/wow64.png",
		color: "#f7b125",
	},
];

// icon.forEach((el) => {
// 	imgItem.forEach(function (el) {
// 		el.addEventListener("click", demo);
// 	});
//     // console.log(el);
// },true);
imgItem.forEach(function (el) {
	el.addEventListener("click", pick);
});
function pick(el) {
	let btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
	let reaction = btn.getAttribute("data-reaction");
	let content = listImg.filter((el) => {
		return el.icon == reaction;
	});
	for (let i = 0; i < boxFeeling.length; i++) {
		boxFeeling[i].addEventListener("click", () => {
            // let a = Number(countFelling[i].textContent);
			subText[i].style.color = content[0].color;
			subText[i].innerHTML = content[0].text;
			replaceIcon[i].style.display = "none";
			defaultIcon[i].style.width = "2rem";
			defaultIcon[i].style.height = "2rem";
			defaultIcon[i].src = content[0].src;
            // countFelling[i].textContent.innerHTML = a++;
            // console.log(a++);
		});
	}
}
