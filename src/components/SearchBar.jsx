import React from 'react';

function SearchBar (props) {
    return (
        <div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search..." onChange={props.handleChange} aria-label="Search"
                aria-describedby="search-addon" />            
        </div>
    )
}

export default SearchBar;