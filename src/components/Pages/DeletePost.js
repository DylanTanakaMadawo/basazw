import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./index.css";
import toast from "react-hot-toast";
import { Spinner } from "../Spinner/Spinner";

export const DeletePost = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();

  //delete book functionality
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`/posts/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/browse");
      })
      .catch((error) => {
        setLoading(false);
        // console.log(id);
        // alert("Error occured. Check console.");
        toast.error("Click button once!");
        // console.log(error);
      });
  };

  const handleCancelDelete = () => {
    navigate("/browse");
  };

  return (
    <>
      {loading ? (
        <Spinner myLoading="while updating jobs" />
      ) : (
        <div className="delete-book-container">
          <div className="delete-book-card">
            <h3>
              Are you sure you want to <b style={{ color: "red" }}>DELETE</b>{" "}
              post?
            </h3>
            <div className="delete-book-btns">
              <button onClick={handleDeleteBook}>Yes, DELETE</button>
              <button onClick={handleCancelDelete}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
