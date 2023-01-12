// гамбургер
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close')
      closeNavigation = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeNavigation.addEventListener('click', () => {
    menu.classList.remove('active');
});

// перещет процентов
const counters = document.querySelectorAll('.skills__ratings-counter'),
        lines = document.querySelectorAll('.skills__ratings-line span');
counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// pageup (прокрутка вверх), работает с библиотеками jguery

$(document).ready(function(){ 

    $(window).scroll(function() {
        if ($(this).scrollTop() > 900) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

});
