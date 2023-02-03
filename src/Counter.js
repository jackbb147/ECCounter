import { useState } from "react";
/**
 * Each counter is associated to a student.
 */

export default function Counter({ onRemoveCounter }) {
  const [name, setName] = useState("Student");
  const [points, setPoints] = useState(0);

  function handleIncrementClick() {
    setPoints(points + 1);
  }

  function handleDecrementClick() {
    setPoints(points - 1);
  }

  function handleChangeName() {
    setName("superman");
  }

  return (
    <div>
      <ButtonRemoveCounter onRemoveCounter={onRemoveCounter} />
      <h1>Welcome to my app</h1>
      <h2> My name is: {name} </h2>
      <h2> I have: {points} points </h2>
      <ButtonIncrement onIncrementClick={handleIncrementClick} />
      <ButtonDecrement onDecrementClick={handleDecrementClick} />

      <ButtonStartValue />
      <ButtonCounterName onCounterNameClick={handleChangeName} />
    </div>
  );
}

function ButtonIncrement({ onIncrementClick }) {
  return <button onClick={onIncrementClick}>Plus</button>;
}

function ButtonDecrement({ onDecrementClick }) {
  return <button onClick={onDecrementClick}>Minus</button>;
}

function ButtonStartValue() {
  return <button> Start Value </button>;
}

function ButtonCounterName({ onCounterNameClick }) {
  return <button onClick={onCounterNameClick}>Counter Name</button>;
}

function ButtonRemoveCounter({ onRemoveCounter }) {
  return <button onClick={onRemoveCounter}> Remove Counter</button>;
}
