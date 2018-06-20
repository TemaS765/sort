import sorting from './Sorting';

const expected = ["3","2","4","6","7"];
sorting.setElements("34267".split(''));
const actual = sorting.sortStep();

test('Sorting step, work correctly',() => {
                expect(actual).toEqual(expected);
    });

//--------------------------------------------------------------

/*
const actula = ["5","4","6","8","7","9"];
const expected = "456879";

test('Sorting geting previous step, work correctly',() => {
    sorting.setElements(actula);
    let elem = sorting.sortStep();
    sorting.setElements(elem);
    sorting.sortStep();
    expect(sorting.step_story.pop()).toEqual(expected);
});*/