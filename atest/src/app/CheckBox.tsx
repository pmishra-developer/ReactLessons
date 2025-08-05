import React, { useState } from 'react';
import updateCheckBoxState from './StateManagement';
import getCheckBoxState from './StateManagement';

const CheckBox: React.FC = () => {
    // Initialize state from StateManagement
    const [checked, setChecked] = useState<boolean>(getCheckBoxState() as boolean);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = event.target.checked;
        setChecked(newChecked);
        updateCheckBoxState(newChecked);
    };

    return (
        <label>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            Check me!
        </label>
    );
};

export default CheckBox;