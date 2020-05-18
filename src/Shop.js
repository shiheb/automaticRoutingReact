import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import "./App.css";

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("sample-json-file.json");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div>
    <h1>List of users</h1>
      {items.map((item) => (
        <div key ={item._id}>
        <Link to={`/shop/${item._id}`}>
          <h2>
            {item.name.first} {item.name.last}
          </h2>
         
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Shop;
