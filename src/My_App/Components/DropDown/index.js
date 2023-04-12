import React, { useState } from 'react';
import Select from 'react-select';


function DropDown({ val1, val2, val3 }) {

    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    return (
        <div className="DropDown">
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isSearchable={false}
            />
        </div>
    );
}


export default DropDown