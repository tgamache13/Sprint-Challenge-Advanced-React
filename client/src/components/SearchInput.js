import React, { useState } from 'react';

 const SearchInput = (initialValue) => {
    const[value, setValue] = useState(initialValue);

    const handleChange = (updatedValue) => {
        setValue(updatedValue);
    }

    return [value, setValue, handleChange];
}
export default SearchInput;