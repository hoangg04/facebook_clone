window.addEventListener("load", function () {
	const nextSlide = document.querySelector(".swiper-button-next");
	const prevSlide = document.querySelector(".swiper-button-prev");
	const slideItems = document.querySelectorAll(".swiper-slide");
	const slideWapper = document.querySelector(".swiper-wrapper");
	const slideItemWidth = slideItems[0].offsetWidth;
	const slideslenght = slideItems.length;
	let positionX = 0;
	let index = 0;
	nextSlide.addEventListener("click", () => {
		handelChangeSlide(1);
	});
	prevSlide.addEventListener("click", () => {
		handelChangeSlide(-1);
	});
	handelChangeSlide = (direction) => {
		if (direction === 1) {
			if (window.innerWidth < 1280 && window.innerWidth > 970) {
				if (index >= slideslenght - 2) {
					index = slideslenght - 2;
					return;
				} else if (index == slideslenght - 3) {
					nextSlide.style.display = "none";
				}
				positionX -= slideItemWidth;
				prevSlide.style.display = "flex";
				slideWapper.style = `transform :translateX(${positionX}px)`;
				index++;
			} else {
				if (index >= slideslenght - 1) {
					index = slideslenght - 1;
					return;
				} else if (index == slideslenght - 2) {
					nextSlide.style.display = "none";
				}
				positionX -= slideItemWidth;
				prevSlide.style.display = "flex";
				slideWapper.style = `transform :translateX(${positionX}px)`;
				index++;
			}
		} else if (direction === -1) {
			if (index <= 0) {
				index = 0;
				return;
			} else if (index == 1) {
				prevSlide.style.display = "none";
			}
			positionX += slideItemWidth;
			nextSlide.style.display = "flex";
			slideWapper.style = `transform :translateX(${positionX}px)`;
			index--;
		}
	};
});
