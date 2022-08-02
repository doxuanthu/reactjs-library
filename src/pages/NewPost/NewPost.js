import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import className from "classnames/bind";
import { useApp } from "../../hooks";
import styles from "./NewPost.module.scss";

const cx = className.bind(styles);

function NewPost() {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const {
    setDisabledSaveBtn,
    titleValue,
    setTitleValue,
    contentPost,
    setContentPost,
  } = useApp();

  useEffect(() => {
    if (titleValue && contentPost) {
      setDisabledSaveBtn(false);
    } else {
      setDisabledSaveBtn(true);
    }
  }, [titleValue, contentPost, setDisabledSaveBtn]);

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
    document.title = e.target.value;
  };
  return (
    <div className={cx("wrapper")}>
      <input
        className={cx("title")}
        type="text"
        placeholder="Tiêu đề"
        value={titleValue}
        onChange={handleTitleChange}
      />
      <CKEditor
        editor={ClassicEditor}
        data={showPlaceholder ? "<p >Nội dung viết ở đây...</p>" : ""}
        config={{
          ckfinder: {
            uploadUrl:
              "https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json",
          },
        }}
        onReady={(editor) => {}}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContentPost(data);
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {
          if (editor.getData() === "<p>Nội dung viết ở đây...</p>") {
            setShowPlaceholder(false);
          }
        }}
      />
    </div>
  );
}

export default NewPost;
