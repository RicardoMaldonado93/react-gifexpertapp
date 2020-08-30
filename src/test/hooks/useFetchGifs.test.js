
import {useFetchGifs } from "../../hooks/useFetchGif";
import { renderHook } from '@testing-library/react-hooks';

describe("Unit test for UseFetchGifs", () => {


    test('should be return inicial state', async() => {
        const { result, waitForNextUpdate } = renderHook(()=>useFetchGifs("one punch"));
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });

    test('should return an array with images and loading set false', async() => {
        const { result, waitForNextUpdate } = renderHook(()=>useFetchGifs("one punch"));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toBe(10)
        expect( loading ).toBe(false);
    })
    
    
})
