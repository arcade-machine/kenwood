$(document).ready(function(){
    var showSlider = function() {
        $('.info__items-list').slick({
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,
                        asNavFor: '.spec__content--general, .spec__content--bowl, .spec__content--options'
                    }
                }
            ]
        });
        $('.spec__content--general').slick({
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        asNavFor: '.info__items-list, .spec__content--bowl, .spec__content--options'
                    }
                }
            ]
        });
        $('.spec__content--bowl').slick({
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        asNavFor: '.info__items-list, .spec__content--general, .spec__content--options'
                    }
                }
            ]
        });
        $('.spec__content--options').slick({
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        asNavFor: '.info__items-list, .spec__content--general, .spec__content--bowl'
                    }
                }
            ]
        });
    };
    showSlider();
    $(window).resize(function(){
        var $windowWidth = $(window).width();
        if ($windowWidth < 800) {
            showSlider();
        }
    });
});

var s1 = document.querySelector('.info__wrapper');
var s2 = document.querySelector('.spec__wrapper--general');
var s3 = document.querySelector('.spec__wrapper--bowl');
var s4 = document.querySelector('.spec__wrapper--options');

function select_scroll_1(e) {
    s2.scrollLeft = s1.scrollLeft;
    s3.scrollLeft = s1.scrollLeft;
    s4.scrollLeft = s1.scrollLeft;
}

s1.addEventListener('scroll', select_scroll_1, false);
