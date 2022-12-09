import React from 'react';

type DisplayPropsType = {
    value: number
    maxValue: number
}

export const Display = (props:DisplayPropsType) => {
    return (
        <div className={(props.value === props.maxValue) ? "Disabled" : "Active"}>
            {props.value}
        </div>
    );
};

export default Display;
