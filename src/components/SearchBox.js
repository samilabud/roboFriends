
import React from 'react';

const SearchBox = ({searchtext,onchangeSearch}) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 b--green ba bg-light-blue" 
                type='search' 
                placeholder='Busca un robot'
                onChange={onchangeSearch} 
                />
        </div>
    );
}

export default SearchBox;