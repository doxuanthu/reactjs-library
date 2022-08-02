import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import AppContext from "./AppContext";

function AppProvider({ children }) {
  const navigate = useNavigate();
  const [disabledSaveBtn, setDisabledSaveBtn] = useState(true);
  const [titleValue, setTitleValue] = useState("");
  const [contentPost, setContentPost] = useState("");

  const handleSubmitPost = useCallback(() => {
    async function createNewPost() {
      const post = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          id: uuidV4(),
          title: titleValue,
          content: contentPost,
          author: "Anonymous",
          createdAt: new Date(),
        }),
      });
      const data = await post.json();
      if (data) navigate("/posts");
      document.title = "React App";
    }

    createNewPost();
    setTitleValue("");
  }, [contentPost, titleValue, navigate]);

  return (
    <AppContext.Provider
      value={{
        disabledSaveBtn,
        setDisabledSaveBtn,
        handleSubmitPost,
        titleValue,
        setTitleValue,
        contentPost,
        setContentPost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
