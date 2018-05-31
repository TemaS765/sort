//подключаем модули

import Element from '../modules/Element.js';
import Sorting from '../modules/Sorting.js';

//обьявляем глобальные переменные
var btn_next = document.querySelector('button');
var list = document.querySelector('.list');
var inp = document.querySelector('input');
var revers = document.querySelector('.revers');

//var flag = false; //флаг защиты от множества выполнений

btn_next.onclick = function() {
	//SortElement(list,revers.checked);

	Sorting.transition(list, revers.checked);
};

inp.onkeydown = function() {
	//Исключаем событие нажатия не цифры
	if (Element.create()) {
		list.appendChild(Element.create());
	} else {
		return false;
	}
};

inp.oninput = function() {
	//анимация для добавленных элементов
	Element.repaint();
};
