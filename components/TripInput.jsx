import React from 'react';

const TripInput = ({ name, changeHandler, read, inputValue, max, className, id, clickHandler }) => {
    return (
        <input
            readOnly={read ? true : false}
            type="text"
            id={id}
            value={inputValue}
            autoComplete='off'
            name={name}
            maxLength={max == 'true' && 10}
            className={className}
            onChange={(e) => changeHandler(e)}
            onClick={() => clickHandler && clickHandler()}
            onFocus={(e) => (e.target.value = "")}
            onBlur={(e) => e.target.value = inputValue}
        />

    )
}

export default TripInput
