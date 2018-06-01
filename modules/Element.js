class Element {

	create() {
		//добавляем элементы со значениями

		let el = document.createElement('div');
		let num = Number(event.key); //преобразуем для сравнения и формирования высоты величины элемента

		if (num >= 1 && num <= 9) {
			el.setAttribute('class', 'elem');
			el.innerText = num;
			el.style.height = 20 * num + 'px';

			return el;
		} else
			return false;
	}

	repaint() {
		//для изменения цвета
		if (timer !== undefined) clearTimeout(timer);

		let elems = document.querySelectorAll('.elem');

		for (var i = 0; i < elems.length; i++) {
			elems[i].style.transition = 'none';
		}
		for (var i = 0; i < elems.length; i++) {
			elems[i].style.background = 'red';
		}

		let timer = setTimeout(function() {
			for (var i = 0; i < elems.length; i++) {
				elems[i].style.transition = '1s';
				elems[i].style.background = 'aqua';
			}
		}, 10);
	}

	
}

export default new Element();
