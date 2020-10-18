$(function(){
    
    var element = document.getElementById('order__phone');
    var maskOptions = {
    mask: '+{38}(000)000-00-00',
    lazy: false
    };
    var mask = IMask(element, maskOptions);
    
})



