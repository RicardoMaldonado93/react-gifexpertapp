import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target}) =>setInputValue(target.value);

    const handleSubmit = (e)=>{ 
        e.preventDefault(); 

        if(inputValue.trim().length > 2){
            setCategory( items =>[  inputValue, ...items ]);
            setInputValue("");
            // document.querySelector("input").placeholder = "ingrese categoria..."
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )

}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}

