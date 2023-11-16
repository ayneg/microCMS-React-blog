import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { client } from "./libs/client";
import { PostDetail } from "./PostDetail";
import './App.css';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    client.get({ endpoint: "blog" })
      .then((res) => { setData(res); })
      .catch((err) => console.error(err));
  }, []);

  if (!data || !data.contents) { //dataもしくはdata.contentsが未定義の場合 Loading...表示
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Link to="/">ホームに戻る</Link>
      <Routes>
        <Route path="/" element={
          <div>
            {data.contents.map((content) => (
              <div key={content.id}>
                <Link to={`/posts/${content.id}`}><h2>{content.title}</h2></Link>
              </div>
            ))}
          </div>
        } />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
