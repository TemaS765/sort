var CreateElement = function(e) {
    
    //добавляем элементы со значениями

    var el = document.createElement('div');
    
    var num = Number(e.key); //преобразуем для сравнения и формирования высоты величины элемента

    if (num >= 1  && num <= 9){

        el.setAttribute('class', 'elem');
        el.innerText = num;
        el.style.height = 20 * num + "px";

        return el;
        
    }
    else {
        return false;
    }

}; 