
class Sorting {

	constructor() {
		this.elems = []; //инициализация массива элементов
		this.stop_index = 0; //инициализация индекса остановки
        this.step_story = []; //история шагов
        this.index_story = [];//история индексов
	}
	//методы добавления историии шагов сортировки
	setIndexStory(index){
		this.index_story.push(index);
	}
	getIndexStory(){
		return this.index_story.pop();
	}

	setStepStory(step){
		this.step_story.push(step);
	}
	getStepStory(){
		return this.step_story.pop();
	}


	claerStory(){
	    this.step_story = [];
	    this.index_story = [];
    }

	setElements (mass) {  //метод добавления массива элементов
		this.elems = mass;
	}

	sortStep () {     //метод выполнения шага сортировки
	    let elems = this.elems.slice(0); //для копирования массива
		let col_elem = elems.length;
		let stop_index = this.stop_index;
		let i,buf;
		let tran_elem = [];
		let f_done = false;

		for (i = stop_index; i < col_elem - 1; i++) {
            if (elems[i] > elems[i + 1]) {
                buf = elems[i];
                elems[i] = elems[i + 1];
                elems[i + 1] = buf;
                stop_index = i; //записываем индекс
                tran_elem.push(i); //запоминаем перемещаемые элементы
                tran_elem.push(i + 1);
                f_done = false;
                break;
            }
            if (f_done && i >= col_elem - 2) //выставляем флаг выполнения сортировки если круг прошел без перестановок
                break;
            if (i >= col_elem - 2){
                i = -1;
                f_done = true;
            }
		}

		this.stop_index = stop_index;

		if (this.elems.join('') != elems.join('')){
			this.setIndexStory(stop_index);
			this.setStepStory(this.elems.join(''));
        }
		 else{
            return false;
		}


		return elems;
	}
    //возвращвем передыдущий шаг
	prevStep(){
	    if(this.step_story.length > 0){
            this.stop_index = this.getIndexStory();
			return this.getStepStory();
        }
        else
            return false;

    }

}

export default new Sorting();
