//Функция для выпадающих списков

function list(){
	//Алгоритм для выпадающих списков
	let menu = document.querySelector("#dots_header");
		menuList = document.querySelector("#menu_social")
		navLink = document.querySelector(".nav_element");
		navServices = document.querySelector("#services_menu");
		burgerBlock = document.querySelector("#burger_mobile");
		burgerList = document.querySelector('.burger_list');
	//Для трёхточечного меню
	menu.addEventListener("mouseover", function(){
		menuList.style.display = "block";
	})

	menu.addEventListener("mouseout", function(){
		menuList.style.display = "none";
	})

	//Для списка услуг
	navLink.addEventListener("mouseover", function(){
		navServices.style.display = "block";
	})

	navLink.addEventListener("mouseout", function(){
		navServices.style.display = "none"
	})

	//Для меню мобильных устройств
	burgerBlock.addEventListener("mouseover", function(){
		burgerList.style.display = "block";
	})

	burgerBlock.addEventListener("mouseout", function(){
		burgerList.style.display = "none";
	})
}

list()

//Эффекты для кнопок

function buttonsFect(){
	let	firstButton = document.querySelector("#first_button_bar");
	secondButton = document.querySelector("#second_button_bar");
	//thirdButton = document.querySelector("#third_button_bar");

	firstButton.classList.add("active");;

	firstButton.addEventListener("click", function(){
		firstButton.classList.add("active");
		secondButton.classList.remove("active");
		//thirdButton.classList.remove("active");
	})

	secondButton.addEventListener("click", function(){
		firstButton.classList.remove("active");
		secondButton.classList.add("active");
		//thirdButton.classList.remove("active");
	})
}

buttonsFect()

//Слайдер с организациями

function sliderFect(){
	const sliderElement = document.querySelector(".container_slider");
	sliderLine = document.querySelector('.container_line');

	let leftOff = 0;
		next = document.querySelector('#next');
		prev = document.querySelector('#prev');

	next.addEventListener("click", function(){
		leftOff = leftOff + 960;
		if(leftOff > 960){
			leftOff = 0;
		}
		sliderLine.style.left = -leftOff + "px";
	})

	 prev.addEventListener("click", function(){
	 	leftOff = leftOff - 960;
	 	if(leftOff < 0){
	 		leftOff = 960;
	 	}
	 	sliderLine.style.left = -leftOff + "px";
	})
}

sliderFect()

