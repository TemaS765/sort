import element from './Element';

const actual = "68765";
const expected = ["6","8","7","6","5"];

test('Element get current array elements, work correctly',() => {

    //Создаем модель DOM c данными
    document.body.innerHTML =
        '<input type="text" value="' + actual + '">' +
        '<button>prev</button>' +
        '<button>next</button>' +
        '<div class="list"></div>';

    let inp = document.querySelector('input');
    let list = document.querySelector('.list');

    element.createModels(inp,list);

    expect(element.currentMassElems()).toEqual(expected);
});