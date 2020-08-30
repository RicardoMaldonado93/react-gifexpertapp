import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = ({ defaultCategories = [] })=>{
    
    const [categories, setCategories] = useState(defaultCategories);

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