import sorting from './Sorting';

const actula = ["5","4","6","8","7","9"];
const expected = "456879";

test('Sorting geting previous step, work correctly',() => {
    sorting.setElements(actula);
   let elem = sorting.sortStep();
    sorting.setElements(elem);
    sorting.sortStep();
    expect(sorting.step_story.pop()).toEqual(expected);
});