
class Sorting {

	constructor() {
		//window.flag = false; //создание глобального флага для устранения проблемы активного нажатия
		this.elems = []; //инициализация массива элементов
		this.stop_index = 0; //инициализация индекса остановки
	}

	setElements (mass) {  //метод создания массива элементов из строки
		this.elems = mass;
	}

	sortStep (revers) {     //метод выполнения шага сортировки
		let elems = this.elems;
		let col_elem = elems.length;
		let stop_index = this.stop_index;
		let i,buf;
		let tran_elem = [];
		let f_done = false;

		//for (i = stop_index; i < col_elem - 1; i++){

		//	console.log(elems[i] + " > " + elems[i+1]);

			if (revers){       //выбор направления сортировки

                for (i = stop_index; i < col_elem - 1; i++) {
                    if (elems[i] < elems[i + 1]) {
                        buf = elems[i];
                        elems[i] = elems[i + 1];
                        elems[i + 1] = buf;
                        stop_index = i; //записываем индекс
                        tran_elem.push(i); //запоминаем перемещаемые элементы
                        tran_elem.push(i + 1);
                        f_done = false;

//				console.log("Сменили местами элементы: " + elems[i] + " и " + elems[i+1]);

                        break;
                    }

                    if (f_done && i >= col_elem - 2) //выставляем флаг выполнения сортировки если круг прошел без перестановок
                        break;

                    if (i >= col_elem - 2){
                        i = -1;
                        f_done = true;
                    }
                }
			}
			else{

                for (i = stop_index; i > -1; i--) {

                	//console.log(i);

                    if (elems[i] > elems[i + 1]) {
                        buf = elems[i];
                        elems[i] = elems[i + 1];
                        elems[i + 1] = buf;
                        stop_index = i; //записываем индекс
                        tran_elem.push(i); //запоминаем перемещаемые элементы
                        tran_elem.push(i + 1);
                        f_done = false;

//				console.log("Сменили местами элементы: " + elems[i] + " и " + elems[i+1]);

                        break;
                    }

                    if (f_done && i == 0) //выставляем флаг выполнения сортировки если круг прошел без перестановок
                        break;

                    if (i == 0){
                        i = col_elem - 1;
                        f_done = true;
                }

			}	
			/*if (f_done && i >= col_elem - 2) //выставляем флаг выполнения сортировки если круг прошел без перестановок
				break;

			if (i >= col_elem - 2){
				i = -1;
				f_done = true;
			}*/

			//stop_index = 0;
			
		}

		this.stop_index = stop_index;

	//	console.log("Запомнили индекс: "+this.stop_index);



		//console.log(elems);//для теста вывод
		//console.log(tran_elem);

		return elems;
	}

}

export default new Sorting();
