import { useState } from "react";
import Die from "./Die";
export default function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      const randomDie = Math.ceil(Math.random() * 6);
      newDice.push(randomDie);
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElement = dice.map((dice) => <Die value={dice} />);

  return (
    <>
      <main>
        <div className="dice-container">{diceElement}</div>
        <button className="roll-dice" onClick={rollDice}>
          Roll
        </button>
      </main>
    </>
  );
}
