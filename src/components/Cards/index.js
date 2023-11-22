import React, { useEffect, useState } from "react";
import { Card } from "../Card";

import { DATA } from "../../Data";
import axios from "axios";
import { NewCard } from "../NewCard/NewCard";
import { Spinner } from "../Spinner/Spinner";

export const Cards = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/posts")
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
    <div
      style={{
        // background: "grey",
        width: "95vw",
        // height: "80vh",
      }}
    >
      <h1 style={{ marginLeft: "20px" }}>Available Jobs</h1>
      <div
        style={{
          // background: "green",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          paddingLeft: 0,
        }}
      >
        {loading ? (
          <>
            {/* <p>loading...</p> */}
            <Spinner myLoading="loading available jobs" />
          </>
        ) : (
          posts.map((post, index) => <NewCard data={post} />)
        )}
      </div>
    </div>
  );
};
