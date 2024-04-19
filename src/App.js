import { useState } from "react";
import Die from "./Die";
export default function App() {
  const [dice, seDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      const randomDie = Math.ceil(Math.random() * 6);
      newDice.push(randomDie);
    }
    return newDice;
  }

  const diceElement = dice.map((dice) => <Die value={dice} />);
  return (
    <>
      <main>
        <div className="dice-container">{diceElement}</div>
      </main>
    </>
  );
}
