//"Липкая" шапка
$(window).scroll(function () {
	if ($(this).scrollTop() > 1) {
		$('header').addClass("sticky");
	} else {
		$('header').removeClass("sticky");
	}
});

//Адаптивное меню
burger.onclick = function () {
	var x = document.getElementById('menu');

	if (x.className === "menu") {
		x.className += " responsive";
	} else {
		x.className = "menu";
	}
}

//Плавный якорь "Logo" в header
$(document).ready(function () {
	$("#header-logo").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});
});

//Плавный якорь "Logo" в footer
$(document).ready(function () {
	$("#footer-logo").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 2500);
	});
});

//Плавные якоря меню
$(document).ready(function () {
	$("#menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
});

//Плавный якорь "Scroll down"
$(document).ready(function () {
	$("#scroll").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 500);
	});
});

//Кнопка "Back to Top"
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 2000);
	});
});

//Анимация при "scroll"
$(document).ready(function () {
	var h = $(window).height();
	$(".header-logo-desk").addClass('animated bounce');
	$(".menu-desk").addClass('animated bounce');
	$(".home-desk .inner").addClass('animated zoomIn');
	$(window).scroll(function () {
		if (($(this).scrollTop() + h) >= $("#toTop").offset().top) {
			$("#toTop img").addClass('animated zoomIn slow');
		}
		if (($(this).scrollTop() + h) >= $(".about-desk").offset().top) {
			$(".about-desk h2").addClass('animated zoomIn fast');
			$(".about-desk hr").addClass('animated fadeInLeft slow');
			$(".about-desk p").addClass('animated flipInX slow');
			$(".about-desk .about-item").eq(0).addClass('animated bounceInLeft slow');
			$(".about-desk .about-item").eq(1).addClass('animated bounceIn slow');
			$(".about-desk .about-item").eq(2).addClass('animated bounceInRight slow');
		}
		if (($(this).scrollTop() + h) >= $(".watch-desk").offset().top) {
			$(".watch-desk .left").addClass('animated bounceInLeft slow');
			$(".watch-desk .right").addClass('animated bounceInRight slow');
		}
		if (($(this).scrollTop() + h) >= $(".portfolio-desk").offset().top) {
			$(".portfolio-desk h2").addClass('animated zoomIn fast');
			$(".portfolio-desk hr").addClass('animated fadeInLeft slow');
			$(".portfolio-desk p").addClass('animated flipInX slow');
			$(".portfolio-desk .slider-dots").addClass('animated fadeInDown slow');
		}
		if (($(this).scrollTop() + h) >= $(".features-desk").offset().top) {
			$(".features-desk h2").addClass('animated zoomIn fast');
			$(".features-desk hr").addClass('animated fadeInLeft slow');
			$(".features-desk .features-items").addClass('animated bounceInLeft slow');
		}
		if (($(this).scrollTop() + h) >= $(".blog-desk").offset().top) {
			$(".blog-desk h2").addClass('animated zoomIn fast');
			$(".blog-desk hr").addClass('animated fadeInLeft slow');
			$(".blog-desk p").addClass('animated flipInX slow');
			$(".blog-desk .blog-item").eq(0).addClass('animated bounceInLeft slow');
			$(".blog-desk .blog-item").eq(1).addClass('animated bounceIn slow');
			$(".blog-desk .blog-item").eq(2).addClass('animated bounceInRight slow');
		}
		if (($(this).scrollTop() + h) >= $(".plans-desk").offset().top) {
			$(".plans-desk h2").addClass('animated zoomIn fast');
			$(".plans-desk hr").addClass('animated fadeInLeft slow');
			$(".plans-desk .plans-item").addClass('animated zoomIn slow');
		}
		if (($(this).scrollTop() + h) >= $(".feedback-desk").offset().top) {
			$(".feedback-desk h2").addClass('animated zoomIn fast');
			$(".feedback-desk hr").addClass('animated fadeInLeft slow');
			$(".feedback-desk p").addClass('animated flipInX slow');
			$(".feedback-desk form").addClass('animated bounceInRight slow');
		}
		if (($(this).scrollTop() + h) >= $(".footer-desk").offset().top) {
			$(".footer-desk .footer-logo").addClass('animated fadeInRight slow');
			$(".footer-desk hr").addClass('animated fadeInLeft slow');
			$(".footer-desk .social").addClass('animated fadeInUp fadeInDown slow');
		}
	});
});

//"Carousel"
let slideIndex = 1,
	slides = document.getElementsByClassName('slider-item'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	dotsWrap = document.querySelector('.slider-dots'),
	dots = document.getElementsByClassName('dot');
showSlides(slideIndex);

function showSlides(index) {
	if (index > slides.length) {
		slideIndex = 1;
	};
	if (index < 1) {
		slideIndex = slides.length;
	};
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	};
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('dot-active')
	};
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides(index) {
	showSlides(slideIndex += index);
}

function currentSlide(index) {
	showSlides(slideIndex = index);
}

prev.addEventListener('click', function () {
	plusSlides(-1);
})

next.addEventListener('click', function () {
	plusSlides(1);
})

dotsWrap.addEventListener('click', function (event) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
			currentSlide(i);
		}
	}
});
