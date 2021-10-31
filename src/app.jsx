import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Вилка" },
    { value: 4, id: 2, name: "Ложка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };

  const handleReset = (counterId) => {
    setCounters(initialState);
  };

  const handleIncrement = (productId) => {
    const newCounters = [];
    counters.forEach((c) => {
      if (c.id === productId) {
        c.value += 1;
      }
      newCounters.push(c);
    });
    setCounters(newCounters);
  };
  const handleDecrement = (productId) => {
    const newCounters = [];
    counters.forEach((c) => {
      if (c.id === productId) {
        c.value -= c.value > 0 ? 1 : 0;
      }
      newCounters.push(c);
    });
    setCounters(newCounters);
  };

  // const handleReset = () => setCounters(initialState);
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItem={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
