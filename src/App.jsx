import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { getCards } from "./lib/get-cards";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCards(
          "https://670023414da5bd2375534f66.mockapi.io/api/v1/getList"
        );
        setCards(response);
      } catch (error) {
        console.log("No pudimos solicitar las tarjetas");
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {
        cards.map(card=><Card card={card}/>)
      }
    </>
  );
}

export default App;
