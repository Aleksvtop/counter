import React, {useState} from 'react';
import './App.css';
import Button from "./Button";
import Display from "./Display";



function App() {
    const maxValue = 5
    const [num, setNum] = useState<number>(0)
    const addHandler = () => {
        if (num !== maxValue) {
            setNum(num + 1)
        }
    }
    const resetHandler = () => {
        setNum(0)
    }
  return (
    <div className="App">
        <div className="Wrapper">
            <div className={"Display"}>
                <Display value={num} maxValue={maxValue}/>
            </div>
            <div className="Buttons">
                <Button disabled={num===maxValue} className="Button" name={'Increment'} callBack={addHandler}/>
                <Button disabled={num===0} className="Button" name={'Reset'} callBack={resetHandler}/>
            </div>
        </div>
    </div>
  );
}

export default App;
