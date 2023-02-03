import { useState } from "react";
import Counter from "./Counter";

function blankCounter(ID) {
  return {
    name: "Student",
    points: 0,
    id: ID || generateID("student")
  };
}
/**
 * generate an ID
 */
function generateID(name) {
  var min = 1,
    max = 1000;
  return name + Math.floor(Math.random() * (max - min + 1) + min);
}

function ButtonAddCounter({ onAddCounter }) {
  return <button onClick={onAddCounter}> Add Counter </button>;
}

export default function App() {
  //counters is an object: { name: String, points: Number }
  const [counters, setCounters] = useState([blankCounter()]);

  const listItems = counters.map((counter) => {
    return (
      <Counter
        key={counter.id}
        onRemoveCounter={() => {
          removeCounter(counter.id);
        }}
      />
    ); //TODO: handle duplicate name.
  });

  function removeCounter(id) {
    console.log("remove me:", id, counters);

    var newCounters = counters.filter((counter) => counter.id !== id);

    setCounters(newCounters);
  }
  function addCounter() {
    setCounters([...counters, blankCounter()]);
  }

  return (
    <div>
      <ButtonAddCounter onAddCounter={addCounter} />
      <ul>{listItems}</ul>
    </div>
  );
}
