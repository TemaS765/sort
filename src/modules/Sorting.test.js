import Sorting from './Sorting';

var sorting_1 = new Sorting();

const expected = ["3","2","4","6","7"];
sorting_1.setElements("34267".split(''));
const actual = sorting_1.sortStep();

test('Sorting step, work correctly',() => {
                expect(actual).toEqual(expected);
    });

//--------------------------------------------------------------
var sorting_2 = new Sorting();
var input_data = "546879".split('');
const expected_data = "456879";

sorting_2.setElements(input_data);
sorting_2.setElements(sorting_2.sortStep());
sorting_2.sortStep();

const actual_data = sorting_2.getStepStory();

test('Sorting geting previous step, work correctly',() => {
    expect(actual_data).toEqual(expected_data);
});