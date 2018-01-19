"use strict";
const toggler = $('.header__menu-toggle');
const nav = $('.header__nav');
nav.removeClass('header__nav--nojs');


$(document).click(function(event) {
	if (toggler.is(event.target)) {
		if (toggler.hasClass('header__menu-toggle--closed')) {
			toggler.removeClass('header__menu-toggle--closed');
			toggler.addClass('header__menu-toggle--opened');
			nav.slideDown();
		} else {
			toggler.removeClass('header__menu-toggle--opened');
			toggler.addClass('header__menu-toggle--closed');
			nav.slideUp();
		}
	} else if ((!toggler.is(event.target)) && (toggler.hasClass('header__menu-toggle--opened'))
				&& (!nav.is(event.target)) && (nav.has(event.target).length == 0)) {
			toggler.removeClass('header__menu-toggle--opened');
			toggler.addClass('header__menu-toggle--closed');
			nav.slideUp();
	}
});


/* При клике по документу проверяем:
	1)Если клик произошел на тоглере, то 
	  - Проверяем, если у него был класс --closed, то
	    - удалаяем класс --closed добавляем ему класс --opened и раскрываем меню.

	  - Проверяем, если у него был класс --opened, то
	    - удалаяем класс --opened и добавляем ему класс --сlosed и закрываем меню

	2)Если клик произошел вне тоглера и меню было открыто(тоглер имел класс --opened) и клик произошел вне меню и вне 
его дочерних элементов,
		 то мы закрываем меню и добавляем тоглеру класс --opened.*/

