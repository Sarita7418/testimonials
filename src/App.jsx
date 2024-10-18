import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { getCards } from "./lib/get-cards";

function App() {
  const [global, setGlobal] = useState([]);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCards(
          "https://670023414da5bd2375534f66.mockapi.io/api/v1/getList"
        );
        setCards(response);
        setGlobal(response);
      } catch (error) {
        console.log("No pudimos solicitar las tarjetas");
      }
    }
    fetchData();
  }, []);

  function removercards(){
    setCards((prevCards) => prevCards.slice(0, -1));
  }

  function addcards(){
    setCards([
      ...cards,
      global[cards.length]
    ]);
  }

  return (
    <>
      <span>{cards.length} tarjetas</span>
      <button className="purple button" disabled={cards.length>=global.length} onClick={addcards}>Agregar tarjetas</button>
      <button className="purple button" disabled={cards.length<=0} onClick={removercards}>Remover tarjetas</button>
      {
        cards.map(card=><Card card={card} key={card.id}/>)
      }
    </>
  );
}

export default App;
