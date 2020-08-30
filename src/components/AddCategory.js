import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {
    
    const [inputValue, setInputValue] = useState('One Puch');

    const handleInputChange = ({target}) => setInputValue(target.value); 
    const handleSubmit = (e)=>{ 
        e.preventDefault(); 

        if(inputValue.trim()){
            setCategory((items)=>[  inputValue, ...items ]);
            setInputValue("");
            document.querySelector("input").placeholder = "ingrese categoria..."
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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

