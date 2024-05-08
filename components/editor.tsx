"use client";

import React, { useEffect, useState } from "react";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import EditorJS from "@editorjs/editorjs";

export default function Editor() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) return;

    const editor = new EditorJS({
      autofocus: true,
      holder: "editorjs",
      onReady: () => {
        console.log("Editor.js is ready to work!");
      },
      onChange: async (api, event) => {
        console.log({ api, event });
        const data = await editor.save();
        console.log(data);
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
      data: {
        time: 1715157177038,
        blocks: [
          {
            id: "sYe-L7wafA",
            type: "header",
            data: {
              text: "This is a new format fot this one!",
              level: 2,
            },
          },
          {
            id: "SJmPQL4_OI",
            type: "paragraph",
            data: {
              text: "and this is another text cool! right?",
            },
          },
          {
            id: "M-rUl3um9V",
            type: "paragraph",
            data: {
              text: "Hera are my <b>grossary </b>lists:",
            },
          },
          {
            id: "qqnTqeGd6u",
            type: "list",
            data: {
              style: "unordered",
              items: ["Apple", "&nbsp;buy egg", "buy something!"],
            },
          },
        ],
        version: "2.29.1",
      },
    });
  }, [isMounted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div
        id="editorjs"
        className="editor-js-formats border border-zinc-300 rounded-xl p-6"
      />
    </>
  );
}
