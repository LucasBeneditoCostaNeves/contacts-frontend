import { useContext, useEffect } from "react";
import { Card } from "../card";
import { CreateContext } from "../../context/context";

export const List = () => {
  const { contacts, loading } = useContext(CreateContext);
  return (
    <ul>
      {loading && contacts.map((element) => Card(element))}
      {loading && contacts.length === 0 && (
        <h1 className="zero">Nenhum Contato</h1>
      )}
    </ul>
  );
};
