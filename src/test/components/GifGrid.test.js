import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGif";

jest.mock("../../hooks/useFetchGif");

describe("Unit test for '<GifGrid>'", () => {
    let wrapper;

    beforeAll(()=>{
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        const category = "One Punch";
        wrapper = shallow(<GifGrid category={category}/>);
    })
   
    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();    
    });

    test("show view items with load useFetchGifs",()=>{
        const gifs = [
            {
                id:"ABC",
                title:"one punch",
                url:"https://localhost:8080/prueba"
            }
        ];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading:false
        });

        const category = "One Punch";
        wrapper = shallow(<GifGrid category={category}/>);

        expect( wrapper.find("p").exists() ).toBe(false);
        expect( wrapper.find("GifGridItem").length ).toBe( gifs.length );
    });
    
})
