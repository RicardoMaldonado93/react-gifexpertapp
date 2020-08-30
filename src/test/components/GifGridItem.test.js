import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("unit test for '<GifGridItem />'", () => {
    const title = "title";
    const url = "https://localhost/any.jpg";
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test("should render component correctly ", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should contain a tag <p>",() =>{
      const p = wrapper.find("p").exists();
      expect( p ).toBeTruthy();
    });

    test("should contain a tag <img>",() =>{
      const img = wrapper.find("img").exists();
      expect( img ).toBeTruthy();
    });

    test("tag '<p>' should contain a title",() =>{
      const p = wrapper.find('p');
      expect( p.text().trim() ).toBe( title );
    });

    test("tag '<img>' should contain a src resource",() =>{
      const img = wrapper.find('img').prop("src");
      expect( img.trim() ).toBe(url);
    });

    test("tag '<img>' should contain an alt resource equals to title prop",() =>{
      const img = wrapper.find('img').prop("alt")
      expect( img.trim() ).toBe(title);
    });

    test("'<div>' should contain the className 'animate__fadeIn'",() =>{
      const div = wrapper.find('div')
      const className = div.prop("className");

      expect( div.hasClass("animate__fadeIn") ).toBeTruthy();
      expect( className.includes("animate__fadeIn") ).toBeTruthy();
    });
})
