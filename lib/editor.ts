"use client";

import Header from "@editorjs/header";
import List from "@editorjs/list";
import EditorJS from "@editorjs/editorjs";

const editor = new EditorJS({
  autofocus: true,
  holder: "editorjs",
  onReady: () => {
    console.log("Editor.js is ready to work!");
  },
  onChange: (api, event) => {
    console.log("Now I know that Editor's content changed!", event);
  },
  tools: {
    header: {
      class: Header,
      inlineToolbar: true,
      config: {
        placeholder: "Enter a header",
        levels: [2, 3, 4],
        defaultLevel: 3,
      },
    },
    list: {
      class: List,
      inlineToolbar: true,
      config: {
        defaultStyle: "unordered",
      },
    },
  },
});

export { editor };
