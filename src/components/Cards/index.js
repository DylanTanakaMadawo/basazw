import React, { useEffect, useState } from "react";
import { Card } from "../Card";

import { DATA } from "../../Data";
import axios from "axios";

export const Cards = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/posts")
      .then((res) => {
        setPosts(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        console.log("error occured bro");
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1 style={{ marginLeft: "20px" }}>Available Tasks</h1>
      <div>
        {posts.map((post, index) => (
          <Card data={post} />
        ))}
      </div>
    </div>
  );
};
