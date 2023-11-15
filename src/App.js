import React, { useState, useEffect } from "react";
import { client } from "./libs/client";
import './App.css';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    client.get({ endpoint: "blog" })
      .then((res) => {
        console.log(res); //レスポンス確認
        setData(res);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!data || !data.contents) { //dataもしくはdata.contentsが未定義の場合 Loading...表示
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {data.contents.map((content) => (
        <div key={content.id}>
          <h2>{content.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
