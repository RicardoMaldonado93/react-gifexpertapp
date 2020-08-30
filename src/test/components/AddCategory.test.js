import '@testing-library/jest-dom'
import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory';

describe("Unit test for 'AddCategory'", () => {
    const setCategory = jest.fn();
    let wrapper = shallow(<AddCategory setCategory={setCategory}/>);
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategory={setCategory}/>);
    });

    test("should render correctly component", () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should change text input', () => {
        const input = wrapper.find("input");
        const value = "Hola mundo";
        
        input.simulate("change",{ target:{value} });
        const p = wrapper.find('p');
        
        expect( p.text().trim() ).toBe(value);
    });

    test("'No' post the information with submit", () => {
        wrapper.find("form").simulate("submit",{ preventDefault(){} });
        expect( setCategory ).not.toHaveBeenCalled();
    });

    test("should call setCategories and clean input",()=>{
        const value = "one punch";

        //* Simulate change 
        wrapper.find("input").simulate("change",{ target: {value} });

        //* Simulate submit
        wrapper.find("form").simulate("submit", { preventDefault(){} });

        //* Category has been called
        expect( setCategory ).toHaveBeenCalled();
        expect( setCategory ).toHaveBeenCalledTimes(1);
        expect( setCategory ).toHaveBeenCalledWith( expect.any(Function) );

        //* Clear input
        expect( wrapper.find("input").prop("value") ).toBe('');
    })
    

})
