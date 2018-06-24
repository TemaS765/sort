"use strict";

//подключаем модули
import Element from './modules/Element.js';
import Sorting from './modules/Sorting.js';

var sorting = new Sorting(); //создаем обьект сортировщика
var element = new Element(); //создаем обьект управления элементами

//обьявляем глобальные переменные
var btn = document.querySelectorAll('button');
var btn_next = btn[1];
var btn_prev = btn[0];

var list = document.querySelector('.list');
var inp = document.querySelector('input[type=text]');

btn_prev.onclick = function() {

    let sort_mass = sorting.prevStep(); //массив

    if (sort_mass)
        element.transpElements(sort_mass);

};

btn_next.onclick = function() {

    let mass_el = element.currentMassElems();  //получаем текущий массив элементов

    let sort_mass = sorting.sortStep(mass_el); //сортируем массив

    if (sort_mass)
        element.transpElements(sort_mass);

};

inp.oninput = function() {

    element.correctInput(inp);

    element.createModels(inp,list);

    sorting.claerStory();


};
