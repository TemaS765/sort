class Sorting {
	constructor() {
		window.flag = false; //создание глобального флага для устранения проблемы активного нажатия
	}

	//функция анимирования перестановки
	animate(list, i) {
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

	transition(list, revers = false) {
		let elem = document.getElementsByClassName('elem');
		let col = elem.length;

		//восстановка флага
		if (window.flag) return;
		else window.flag = true;

		for (let i = 0; i <= col - 2; i++) {
			let num = Number(list.children[i].innerText); // перобразуем в число текущий и следующий элемент
			let next_num = Number(list.children[i + 1].innerText);
			if (revers) {
				if (num < next_num) {
					this.animate(list, i);
					break;
				}
			} else {
				if (num > next_num) {
					this.animate(list, i);
					break;
				}
			}
			if (i == col - 2) {
				window.flag = false;
			}
		}
	}
}

export default new Sorting();
