$(document).ready(function() {

    /**
     * Вкладки
     */

    $('.tabs-nav').each(function() {
        $(this).find('.tabs-nav__item').each(function(i) {
            $(this).click(function() {
                $(this).addClass('tabs-nav__item_active').siblings().removeClass('tabs-nav__item_active')
                    .closest('.tabs').find('.tabs-content').removeClass('tabs-content_active').eq(i).addClass('tabs-content_active');
            });
        });
    });


    /**
     * Свернуть/развернуть закза в таблице
     */

    $('.table-order__main').click(function() {
        $(this).parents('.table-order__row').toggleClass('table-order__row_open').find('.table-order__hidden').slideToggle('normal');
    });


    /**
     * Свернуть/азвернуть подробнее в аккордионе
     */

    $('.accordion__more').click(function() {
        $(this).toggleClass('accordion__more_active').siblings('.accordion__hide').slideToggle('normal');
    });


    /**
     * Слайдер
     */

    if ($('.product-slider').length > 0) {
        $('.product-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '<button class="slick-prev"></button>',
            nextArrow: '<button class="slick-next"></button>',
        });
    }

    /*
        селект цвета
    */


    if ($('.js-item-color').length > 0) {
        selectColor();
    }

    function selectColor() {

        $('.form-edit__group').each(function(e, elem) {
            if ($(elem).find('div').is('.js-item-color')) {
                let arrayColor = $(elem).find('.js-item-color').attr('data-color').split(',');

                $(elem).find('.fs-options .fs-option').each(function(index, elems) {
                    if (index > 0) {
                        if (arrayColor[index - 1].indexOf("#ffffff") == -1 || arrayColor[index - 1].indexOf("#fff") == -1) {
                            $(elems).find('.fs-option-label').append('<i class="option-colors" style="background:' + arrayColor[index - 1] + ';"></i>')
                        } else {
                            $(elems).append('<i class="option-colors option-colors_border" style="background:' + arrayColor[index - 1] + ';"></i>')
                        }
                    }
                });
                arrayColor.length = 0;
            }
        });
    }


    // попап
    $('.js-btn-popup').click(function(e) {
        e.preventDefault();
        let index_btn_popup = $(this).attr('href');

        $.each($('.js-popup'), function(i, elem) {
            let index_popup = $(elem).attr('data-id-popup');
            index_btn_popup === index_popup ? $(elem).fadeIn(300) : $(elem).fadeOut(300);
        });
    });

    function close_popup() {
        $('.js-popup').fadeOut(300);
    }

    $('.js-popup__close').click(close_popup);

    $('.js-popup').click(function(e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
            $('.js-popup').fadeOut(300);
    });
    // end попап

    $("[data-fancybox]").fancybox({});

    // выбор цвета

    $('.js-form-colos').each(function(e, elems) {
        $(elems).find('.js-form-colors').each(function(i, item) {
            if ($(item).attr('data-item-color').indexOf('#fff') == -1 && $(item).attr('data-item-color').indexOf('#ffffff') == -1 && $(item).attr('data-item-color').indexOf('white') == -1 && $(item).attr('data-item-color').indexOf('rgb(255, 255, 255)') == -1) {
                $(item).css('background-color', $(item).attr('data-item-color'));
            } else {
                $(item).css('background-color', $(item).attr('data-item-color'));
                $(item).addClass('option-colors_border');
            }
        });
    });

    $('.js-form-colors').click(function() {
        if ($(this).attr('data-item-color').indexOf('#fff') == -1 && $(this).attr('data-item-color').indexOf('#ffffff') == -1 && $(this).attr('data-item-color').indexOf('white') == -1 && $(this).attr('data-item-color').indexOf('rgb(255, 255, 255)') == -1) {
            $(this).closest('.js-form-colos').find('.js-main-color').css('background-color', $(this).attr('data-item-color'));
            $(this).closest('.js-form-colos').find('.js-main-color').removeClass('option-colors_border');
        } else {
            $(this).closest('.js-form-colos').find('.js-main-color').css('background-color', $(this).attr('data-item-color'));
            $(this).closest('.js-form-colos').find('.js-main-color').addClass('option-colors_border');
        }
        $('.form-colors__items').addClass('form-colors__items-hiden');
    });

    $('.js-form-colors__main').click(function() {
        $('.js-form-colos').closest('.js-form-colos').find('.form-colors__items').removeClass('form-colors__items-hiden');
    });

    $(document).click(function(e) {
        let $divColor = $('.js-form-colors__main');

        if (!$divColor.is(e.target) && $divColor.has(e.target).length === 0) {
            $('.form-colors__items').addClass('form-colors__items-hiden');
        }
    });

});