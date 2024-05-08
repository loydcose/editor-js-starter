"use client";

import React, { useEffect, useState } from "react";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import EditorJS from "@editorjs/editorjs";
import SimpleImage from "@editorjs/simple-image";
import Checklist from "@editorjs/checklist";
import Code from "@editorjs/code";
import RawCode from "@editorjs/raw";
import InlineImage from "editorjs-inline-image";

export default function Editor() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) return;

    const getEditorData = () => {
      const data = localStorage.getItem("editorData");
      if (data) {
        const parsedData = JSON.parse(data);
        if (
          parsedData ||
          parsedData?.blocks ||
          parsedData?.time ||
          parsedData?.version
        ) {
          return parsedData;
        }
      }
      return {};
    };

    const editor = new EditorJS({
      autofocus: true,
      holder: "editorjs",
      onReady: () => {
        console.log("Editor.js is ready to work!");
      },
      onChange: async (api, event) => {
        const data = await editor.save();
        localStorage.setItem("editorData", JSON.stringify(data));
        console.log(data);
      },
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            placeholder: "Enter a header",
            levels: [1, 2, 3, 4, 5, 6],
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
        image: SimpleImage,
        inlineImage: {
          class: InlineImage,
          inlineToolbar: true,
          config: {
            embed: {
              display: true,
            },
            unsplash: {
              appName: "your_app_name",
              apiUrl: "https://your-proxy-api-url.com",
              maxResults: 30,
            },
          },
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        code: Code,
        rawCode: RawCode,
      },
      data: getEditorData(),
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

/*
cool! plugins
https://github.com/editor-js/awesome-editorjs?tab=readme-ov-file#code
https://github.com/kommitters/editorjs-inline-image
https://github.com/editor-js/table
https://github.com/kaaaaaaaaaaai/editorjs-button
https://github.com/editor-js/marker
https://github.com/editor-js/inline-code
https://unsplash.com/documentation#search-photos
*/
