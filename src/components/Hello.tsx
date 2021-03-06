import * as React from 'react';
import './Hello.css';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Hello = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: IProps) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You should be more enthusiastic');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
