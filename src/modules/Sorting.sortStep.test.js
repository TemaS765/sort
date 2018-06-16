import sorting from './Sorting';

const actula = ["3","4","2","6","7"];
const expected = ["3","2","4","6","7"];

test('Sorting step, work correctly',() => {
                sorting.setElements(actula);
                expect(sorting.sortStep()).toEqual(expected);
    });
