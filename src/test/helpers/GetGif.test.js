import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import getGifs from '../../helpers/getGifs';

describe("Unit test for 'GetGifs'", () => {

    test("should get 10 elements ", async() => {
        const gifs = await getGifs("one punch");
        expect( gifs.length ).toBe( 10 );
    });

    test("should get 0 elements without of category ", async() => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe( 0 );
    });

})
