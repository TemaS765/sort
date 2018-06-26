import Sorting from './Sorting';

describe('Module Sorting', () => {

    test('Sorting step, work correctly',() => {
        var sorting_1 = new Sorting();
        var input_data = "34267".split('');

        const expected = "32467".split('');
        const actual = sorting_1.sortStep(input_data);

        expect(actual).toEqual(expected);
    });

    test('Sorting geting previous step, work correctly',() => {
        var sorting_2 = new Sorting();
        var input_data = "546879".split('');

        const expected = "456879";
        sorting_2.sortStep(sorting_2.sortStep(input_data));
        const actual = sorting_2.getStepStory();

        expect(actual).toEqual(expected);
    });

    test('Sorting array sorting, work correctly',() => {
        var sorting_3 = new Sorting();
        var input_data = "949156134849".split('');

        const expected = input_data.slice(0).sort((a,b) => a - b);
        const actual = sorting_3.sortMass(input_data);

        expect(actual).toEqual(expected);
    });

    test('Sorting reset stop index of the boundary case, work correctly',() => {
        var sorting_4 = new Sorting();
        var input_data = "1234589".split('');

        const expected = 0;
        sorting_4.sortStep(input_data);
        const actual = sorting_4.getStopIndex();

        expect(actual).toEqual(expected);
    });

});