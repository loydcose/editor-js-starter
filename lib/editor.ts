import Header from "@editorjs/header"
import List from "@editorjs/list"
import EditorJS from "@editorjs/editorjs"
import SimpleImage from "@editorjs/simple-image"
import Checklist from "@editorjs/checklist"
import RawCode from "@editorjs/raw"
import InlineCode from "@editorjs/inline-code"
import Table from "@editorjs/table"
import Paragraph from "@editorjs/paragraph"

const tools = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    config: {
      preserveBlank: true,
    },
  },
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
  checklist: {
    class: Checklist,
    inlineToolbar: true,
  },
  code: RawCode,
  inlineCode: InlineCode,
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },
}

const getEditorData = () => {
  const data = localStorage.getItem("editorData")
  if (data) {
    const parsedData = JSON.parse(data)
    if (
      parsedData ||
      parsedData?.blocks ||
      parsedData?.time ||
      parsedData?.version
    ) {
      return parsedData
    }
  }
  return {}
}

const initEditor = () => {
  const editor = new EditorJS({
    autofocus: true,
    holder: "editorjs",
    onReady: () => {
      console.log("Editor.js is ready to work")
    },
    onChange: async (api, event) => {
      const data = await editor.save()
      localStorage.setItem("editorData", JSON.stringify(data))
    },
    tools: tools,
    data: getEditorData(),
  })
}
export { initEditor }
