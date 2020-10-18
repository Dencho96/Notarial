$(function(){
    
    var element = document.getElementById('order__phone');
    var maskOptions = {
    mask: '+{38}(000)000-00-00',
    lazy: false
    };
    var mask = IMask(element, maskOptions);

    $(".header__btn").click(function(){
        $(".header__btn").toggleClass("is-active");
    });
    
    $('.header__btn').on('click', function() {
        $('.header__nav').slideToggle();
    });
})



