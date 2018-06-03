//подключаем модули

import Element from '../modules/Element.js';
import Sorting from '../modules/Sorting.js';

//обьявляем глобальные переменные
var btn_next = document.querySelector('button');
var list = document.querySelector('.list');
var inp = document.querySelector('input[type=text]');
var revers = document.querySelector('.revers');
window.flag = false; //флаг защиты от множества выполнений

btn_next.onclick = function() {

	if (window.flag == false){
		window.flag = true;
		let str_el = Element.currentMassElems();
		let ind_el;

		Sorting.setElements(str_el);
		ind_el = Sorting.sortStep(revers.checked);
		Element.transpElements(ind_el);
	}

	//console.log("Флаг остановки: " + window.flag);
	//Element.currentMassElems();
	
	
};

inp.onkeydown = function() {
	//Исключаем событие нажатия не цифры
	let num = Number(event.key); //преобразуем для сравнения и формирования высоты величины элемента

		if (num >= 1 && num <= 9){
			
		}
		else
			return false;
};

inp.oninput = function() {
	//анимация для добавленных элементов
	Element.postElem();
	Element.repaint();
};
