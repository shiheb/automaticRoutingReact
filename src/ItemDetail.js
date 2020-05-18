import React, { useState, useEffect } from "react";
import "./App.css";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem(match.params.id);
    console.log(match.params.id);
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async (id) => {
    const data = await fetch("../sample-json-file.json");
    const items = await data.json();
    console.log(items.filter((a) => a._id === id));

    setItem(items.filter((a) => a._id === id));
  };
  return (
    <div>
      {item.map((ite) => (
        <div key={ite._id}>
          <h1>
            {ite.name.first} {ite.name.last}
          </h1>
          <h2>
            {ite.age} years old working at{" "}
            <strong>{ite.company}</strong>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ItemDetail;
