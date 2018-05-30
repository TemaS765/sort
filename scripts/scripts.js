//обьявляем глобальные переменные
var btn_next = document.querySelector('button');
var list = document.querySelector('.list');
var inp = document.querySelector('input');
var revers = document.querySelector('.revers');

var flag = false; //флаг защиты от множества выполнений


btn_next.onclick = function () {

    SortElement(list,revers.checked);
    
}

inp.onkeydown = function (e) {
    
    //Исключаем событие нажатия не цифры
    if(CreateElement(e)){
        list.appendChild(CreateElement(e));
    }
    else{
        return false;
    }
}

inp.oninput = function (timer) {

    //анимация для добавленных элементов
    RepaintElements(timer);
}