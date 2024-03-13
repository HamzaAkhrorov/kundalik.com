import Card from "./Card";
import { useEffect, useState } from "react";

function Cards() {
  const [data, setData] = useState([]);
  function getData() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }
  useEffect(() => {
    getData();
  }, []);

  console.log("datas", data);
  return (
    <div className="homepage">
      {data?.products?.map((i) => (
        <h1 key={i.id}>{i.title}</h1>
      ))}
      
    <Card key={i.id}/>
    </div>
  );
}

export default Cards;



