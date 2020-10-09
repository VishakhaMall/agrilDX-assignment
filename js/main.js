/*------------------------
    Header
    --------------------------*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 20) {
            $('header').addClass('menu-sticky');
        } else {
            $('header').removeClass('menu-sticky');
        }
    });
    var touch = $('#resp-menu');
    var menu = $('.menu');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 767 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
	
	const labels = document.querySelectorAll(".accordion-item__label");
const tabs = document.querySelectorAll(".accordion-tab");

function toggleShow() {
	const target = this;
	const item = target.classList.contains("accordion-tab")
		? target
		: target.parentElement;
	const group = item.dataset.actabGroup;
	const id = item.dataset.actabId;

	tabs.forEach(function(tab) {
		if (tab.dataset.actabGroup === group) {
			if (tab.dataset.actabId === id) {
				tab.classList.add("accordion-active");
			} else {
				tab.classList.remove("accordion-active");
			}
		}
	});

	labels.forEach(function(label) {
		const tabItem = label.parentElement;

		if (tabItem.dataset.actabGroup === group) {
			if (tabItem.dataset.actabId === id) {
				tabItem.classList.add("accordion-active");
			} else {
				tabItem.classList.remove("accordion-active");
			}
		}
	});
}

labels.forEach(function(label) {
	label.addEventListener("click", toggleShow);
});

tabs.forEach(function(tab) {
	tab.addEventListener("click", toggleShow);
});



$(function() {
  $(".tabAuto li:first").addClass("current");
  $(".tgh-box div").not(":first").hide();
  $(".tabAuto li").click(function() {
    $(this).addClass("current").siblings().removeClass("current");
    var index = $(".tabAuto li").index(this);
    $(".tgh-box div").eq(index).fadeIn().siblings().fadeOut();
  })
})


$(function() {
  $(".tabAuto li:first").addClass("current");
  $(".tgh-box div:first").css('display', 'block');
 autoScroll();
  contentHover();
  currentHover();

});
var i = -1; 
var n = $(".tabAuto li").length - 1;
var offset = 3000; 
var timer = null;

function autoScroll() {
  i++;
  if (i > n)
    i = 0;
  slide(i);
  timer = window.setTimeout(autoScroll, offset);
}

function slide(i) {
  $(".tabAuto li").eq(i).addClass("current").siblings().removeClass("current");
  $(".tgh-box div").eq(i).fadeIn().siblings().hide();
}

function currentHover() {
  $(".tabAuto li").hover(function() {
    if (timer) {
      clearTimeout(timer);
      i = $(this).prevAll().length;
      slide(i);
    }
  }, function() {
  //  timer = window.setTimeout(autoScroll, offset);
    this.blur();
    return false;
  })
}

function contentHover() {
  $(".tgh-box div").hover(function() {
    if (timer) {
      clearTimeout(timer);
      i = $(this).prevAll().length;
      slide(i);
    }
  }, function() {
    //timer = window.setTimeout(autoScroll, offset);
    this.blur();
    return false;
  })
}


 document.addEventListener("DOMContentLoaded", () => {

        // grab all the slides 
        let slides = document.querySelectorAll("#slider .slide");
        // set initial slide
        let currentSlide = 0;
        //grab both buttons
        const nextButton = document.querySelector(".button-right");
        const prevButton = document.querySelector(".button-left");

        function nextSlide() {
            // current slide becomes hidden
            slides[currentSlide].className = 'slide';
            // set the current slide as the next one
            currentSlide = (currentSlide + 1) % slides.length;
            // add the class showing to the slide to make it visible
            slides[currentSlide].className = 'slide showing';
        }

        function prevSlide() {
             // current slide becomes hidden
            slides[currentSlide].className = 'slide';
            // set the current slide as the previous one
            currentSlide = (currentSlide - 1) % slides.length;
            
            if (currentSlide == -1) { 
                currentSlide = slides.length-1; 
            } 
            // add the class showing to the slide to make it visible
            slides[currentSlide].className = 'slide showing';
        }

        nextButton.addEventListener("click", () => {
            // go to next slide on click of the button
            nextSlide();
        });
        prevButton.addEventListener("click", () => {
            // go to previous slide on click of the button
            prevSlide();
        });

        /* VERTICALLY ALIGN THE BUTTONS IN THE MIDDLE OF THE SLIDER TEXT
         */
        function positionSliderButton() {
            // grab the slider
            let slider = document.querySelector('.slide-text');
            // grab its height
            let sliderHeight = slider.getBoundingClientRect().height;
            // grab the button
            let buttons = document.querySelectorAll('.slider-button');

            // for each of the buttons
            for (button of buttons) {
                // get their height
                let buttonHeight = button.getBoundingClientRect().height;
                // position them right in the middle of the text,
                button.style.top = (((sliderHeight - buttonHeight) / 2).toString()) + "px";
            }
        }
        positionSliderButton();

        // whenever the window is resize, reposition the buttons
        window.addEventListener('resize', () => {
            positionSliderButton();
        });

    });