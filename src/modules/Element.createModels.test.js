import element from './Element';

const actual = "68985146841";
const expected = ["6","8","9","8","5","1","4","6","8","4","1"];

test('Element created Models, work correctly',() => {

    //Создаем модель DOM c данными
    document.body.innerHTML =
        '<input type="text" value="' + actual + '">' +
        '<button>prev</button>' +
        '<button>next</button>' +
        '<div class="list"></div>';

    let inp = document.querySelector('input');
    let list = document.querySelector('.list');

    element.createModels(inp,list);

    let elems = [];
    let col_el = list.children.length - 1;

    for(let i = 0; i <= col_el; i++){
        elems[i] = list.children[i].innerText;
    }

    expect(elems).toEqual(expected);
});