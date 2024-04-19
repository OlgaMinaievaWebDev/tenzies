import Die from "./Die";
export default function App() {
  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      const randomDie = Math.ceil(Math.random() * 6);
      newDice.push(randomDie);
    }
    return newDice;
  }

  console.log(allNewDice());
  return (
    <>
      <main>
        <div className="dice-container">
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
        </div>
      </main>
    </>
  );
}
