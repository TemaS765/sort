var RepaintElements = function (timer) {

    //для изменения цвета
    clearTimeout(timer);

    var elems = document.querySelectorAll('.elem');

    for(var i = 0; i < elems.length; i++){
        elems[i].style.transition = 'none';        
    }
    for(var i = 0; i < elems.length; i++){
        elems[i].style.background = 'red';        
    }

    timer = setTimeout(function(){

        for(var i = 0; i < elems.length; i++){
            elems[i].style.transition = '1s';
            elems[i].style.background = 'aqua';        
        }

    },100);
}