import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],

    ["bold", "italic", "underline", "strike", "blockquote"],
    ["code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  }, // Include syntax module
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block",
];

const Quill = ({ value }) => {
  const dispatch = useDispatch();
  const { editorSection } = useSelector((state) => state.course);
  return (
    <>
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        value={editorSection?.content}
        onChange={(value) => {
          dispatch({
            type: "course/setEditorSectionContent",
            payload: value,
          });
          dispatch({
            type: "course/setEditFlag",
            payload: true,
          });
        }}
      />
    </>
  );
};

export default Quill;
