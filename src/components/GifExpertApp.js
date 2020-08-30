import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = ()=>{
    //const categories = ["One Punch", "Samurai X", "Dragon Ball"];
    const [categories, setCategories] = useState(["One Punch"])

    // const handleAdd = ()=>{
    //     let anime = "Heroe Academy";
    //     setCategories([...categories, anime]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category =>
                        <GifGrid 
                            category={category}
                            key={category}
                        />
                    )
                }

            </ol>
            
        </>
    );
}

export default GifExpertApp;