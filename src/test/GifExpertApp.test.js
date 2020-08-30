import '@testing-library/jest-dom'
import React from 'react';
import { shallow } from "enzyme";
import GifExpertApp from "../components/GifExpertApp"

describe("Unit test for 'GiftExpertApp'", () => {


    test("should render correctly component", () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });

    test("should view list of categories", () => {
        const categories = ["One Punch","Dragon Ball"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
    });
    

})
