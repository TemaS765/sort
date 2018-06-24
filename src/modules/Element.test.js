import Element from './Element';
import Sorting from './Sorting';

describe('Module Element',() => {

    let element = new Element();
    let sorting = new Sorting();
    const input_data = "68985146841";

    //Создаем модель DOM c данными
    document.body.innerHTML =
        '<input type="text" value="' + input_data + '">' +
        '<button>prev</button>' +
        '<button>next</button>' +
        '<div class="list"></div>';

    test('Element created Models, work correctly',() => {
        const expected = "68985146841".split('');

        let inp = document.querySelector('input');
        let list = document.querySelector('.list');

        element.createModels(inp,list);

        const actual = element.currentMassElems();

        expect(actual).toEqual(expected);

        //отменяем изменения
        element.removeModel();
    });

    test('Element get current array elements, work correctly',() => {

        let inp = document.querySelector('input');
        let list = document.querySelector('.list');

        inp.value = input_data;

        element.createModels(inp,list);

        const actual = element.currentMassElems().join('');
        const expected = inp.value;
        expect(actual).toEqual(expected);

        //удаляем модель
        element.removeModel();
    });

    test('Element transposition elements, work correctly',() => {

        let inp = document.querySelector('input');
        let list = document.querySelector('.list');

        inp.value = input_data;

        element.createModels(inp,list);

        const expected = sorting.sortStep(element.currentMassElems());

        element.transpElements(expected);

        const actual = element.currentMassElems();

        expect(actual).toEqual(expected);

        //удаляем модель
        element.removeModel();
    });

    test('Element transposition elements with an unchanged array, work correctly',() => {

        let inp = document.querySelector('input');
        let list = document.querySelector('.list');

        inp.value = input_data;

        element.createModels(inp,list);

        const expected = "68985146841".split('');;

        element.transpElements(expected);

        const actual = element.currentMassElems();

        expect(actual).toEqual(expected);

        //удаляем модель
        element.removeModel();
    });

});