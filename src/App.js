import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { client } from "./libs/client";
import { PostDetail } from "./PostDetail";
import './App.scss';

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
    <main className="main">
      <h1 className="title">おれのブログ</h1>
      <Router>
        <Link to="/">ホームに戻る</Link>
        <Routes>
          <Route path="/" element={
            <div className="articles">
              {data.contents.map((content) => (
                <div key={content.id}>
                  <h2 className="articles_title">
                    <Link to={`/posts/${content.id}`}>{content.title}</Link>
                  </h2>
                </div>
              ))}
            </div>
          } />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
