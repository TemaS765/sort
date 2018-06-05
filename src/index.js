"use strict";

//подключаем модули
import Element from './modules/Element.js';
import Sorting from './modules/Sorting.js';

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

inp.oninput = function() {

	let key_num = Number(event.data);
		let str = "";
		let index = inp.selectionStart - 1;

		Element.correctInput(inp);
			
			str = inp.value;
			let col_sim = str.length;
			let col_el = list.childNodes.length - 1;

			for(let i = 0; i < col_sim; i++){  //перебираем элементы и сравниваем с отображаемыми

					if (list.children[i] == undefined) //если данный элемент не отображается то создаем и выводим его
						Element.postElem(i, Element.create(str[i]));

					if(list.children[i].innerText != str[i]){ //проверяем тот ли элемент стоит на данном месте
						Element.delElem(i);
						Element.postElem(i, Element.create(str[i]));
					}
			}

			if (col_el > col_sim){ //проверяем остались ли лишние элементы

				for(let i = col_sim; i < col_el; i++){ //удаляем их
						Element.delElem(col_sim);
				}
			}

		Element.repaint(); //анимация изменения для жлементов
};
