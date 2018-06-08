"use strict";

//подключаем модули
import Element from './modules/Element.js';
import Sorting from './modules/Sorting.js';

//обьявляем глобальные переменные
var btn_next = document.querySelector('button');
var list = document.querySelector('.list');
var inp = document.querySelector('input[type=text]');
var revers = document.querySelector('.revers');

btn_next.onclick = function() {

    let mass_el = Element.currentMassElems();  //получаем текущий массив элементов

    Sorting.setElements(mass_el); //добавляем массив в сортировщик

    let sort_mass = Sorting.sortStep(revers.checked); //сортируем массив

    Element.transpElements(sort_mass);

};

inp.oninput = function() {

    if(revers.checked)
        Sorting.stop_index = 0;
    else
        Sorting.stop_index = list.childNodes.length - 2;

    Element.correctInput(inp);

    Element.createModels(inp,list);

	Element.repaint(); //анимация изменения для жлементов

    //Element.initPositElem(list); //привязка по id
};
