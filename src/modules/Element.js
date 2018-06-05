class Element {
	//Метод для коррекции ввода
	correctInput(inp_el){
		let str = inp_el.value;
		let res = "";
		let col_sim = str.length;

		for(let i = 0; i < col_sim; i++){
			let num = Number(str[i]);
			if( num >= 1 && num <= 9){
				res += num;
			}
		}
		
		inp_el.value = res;		
	}
	//метод создания элемента
	create(num) {
		//добавляем элементы со значениями
		let el = document.createElement('div');
		el.setAttribute('class', 'elem');
		el.innerText = num;
		el.style.height = 20 * num + 'px';
		return el;
	}
	//метеод вставки элементов
	postElem(index, elem) {
		let list = document.querySelector('.list');
		list.insertBefore(elem,list.children[index]); //вставляем элемент по индексу
	}
	//метод удаления всех элементов
	delAllElem(){
		let list = document.querySelector('.list');
	
		while(list.lastChild){
			list.removeChild(list.lastChild);
		}
	}
	//метод удаления элемента по индексу
	delElem(index){
		let list = document.querySelector('.list');
		list.removeChild(list.children[index]);
	}
	//метод перерисовки
	repaint() {
		//для изменения цвета
		if (timer !== undefined) 
			clearTimeout(timer);

		let elems = document.querySelectorAll('.elem');

		for (var i = 0; i < elems.length; i++) {
			elems[i].style.transition = 'none';
			elems[i].style.background = 'red';
		}
		
		let timer = setTimeout(function() {
			for (var i = 0; i < elems.length; i++) {
				elems[i].style.transition = '1s';
				elems[i].style.background = 'aqua';
			}
		}, 10);
	}
	//метод перестановки элементов
	transpElements(index_elems) {
		let list = document.querySelector('.list');

		if (index_elems == "")
		{
			window.flag = false;
			return;
		}

		let i = index_elems[0];

		//анимация для перемещения
		list.children[i].style.transition = '0.2s'; //время анимации
		list.children[i + 1].style.transition = '0.2s';
		list.children[i].style.background = 'red';
		list.children[i + 1].style.background = 'red';
		list.children[i].style.position = 'relative';
		list.children[i + 1].style.position = 'relative';
		list.children[i].style.left = '0px';
		list.children[i + 1].style.right = '0px';

		setTimeout(function() {
			list.children[i].style.left = 13 + 'px';
			list.children[i + 1].style.right = 13 + 'px';
		}, 100);

		setTimeout(function() {
			list.children[i].style.background = 'aqua';
			list.children[i + 1].style.background = 'aqua';
			list.insertBefore(list.children[i + 1], list.children[i]);
			list.children[i].style.transition = 'none'; //отключаем анимацию
			list.children[i + 1].style.transition = 'none';

			list.children[i].style.left = '';
			list.children[i].style.right = '';
			list.children[i + 1].style.left = '';
			list.children[i + 1].style.right = '';
			window.flag = false;
		}, 300);
	}
	//метод получения текущего расположения элементов на странице
	currentMassElems() {
		let list = document.querySelector('.list');

		let elems = list.childNodes;
		let col_el = elems.length;
		let mass_el = "";

		for(let i = 0; i < col_el; i++){
			mass_el += elems[i].innerText; 
		}

		return mass_el;
	}

	
}

export default new Element();
