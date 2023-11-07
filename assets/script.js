const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');
const img_banner = document.querySelector('.banner-img');
console.log(img_banner)
const tagLine = document.querySelector('#banner p');

current_dot = 0;

const dots = document.querySelectorAll(".dot");

arrowRight.addEventListener('click', (e) => {
	dots[current_dot].classList.remove('dot_selected');
	if(current_dot ==3){
		current_dot = 0;
	}else{
		current_dot++;
	}
	dots[current_dot].classList.add('dot_selected');

	img_banner.src = "./assets/images/slideshow/"+slides[current_dot].image;
	console.log(img_banner.src)
	tagLine.innerHTML = slides[current_dot].tagLine;

});

arrowLeft.addEventListener('click', (e) => {
    console.log('left');

	dots[current_dot].classList.remove('dot_selected');
	if(current_dot ==0){
		current_dot = 3;
	}else{
		current_dot--;
	}
	dots[current_dot].classList.add('dot_selected');

	img_banner.src = "./assets/images/slideshow/"+slides[current_dot].image;
	console.log(img_banner.src)
	tagLine.innerHTML = slides[current_dot].tagLine;
});



