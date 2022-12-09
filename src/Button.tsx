import React from 'react';

type ButtonPropsType = {
    name: string,
    callBack: () => void,
    className: string,
    disabled: boolean
}

export const Button = (props:ButtonPropsType) => {
    return (
        <button disabled={props.disabled} className={props.className} onClick={() => props.callBack()}>{props.name}</button>
    );
};

export default Button;