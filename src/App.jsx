import { useState } from "react";

export default function App() {
  const [articleName, setArticleName] = useState(["pane"]);
  const [productName, setProductName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    {
      productName &&
        setArticleName((currentState) => [...currentState, productName]);
    }
    setProductName("");
  };

  const articleDelete = (indexToDelete) => {
    setArticleName((currentState) =>
      currentState.filter((article, index) => index !== indexToDelete)
    );
  };
  return (
    <>
      <h1>Lista Articoli</h1>
      <ul>
        {articleName.map((article, index) => (
          <li key={index}>
            {article}
            <button onClick={() => articleDelete(index)}>&#9746;</button>
          </li>
        ))}
      </ul>
      <h3>Aggiungi articoli</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <button type="submit">Invia</button>
      </form>
    </>
  );
}
