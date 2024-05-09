"use client"

import { initEditor } from "@/lib/editor"
import React, { useEffect, useState } from "react"

export default function Editor() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (!isMounted) return

    initEditor()
  }, [isMounted])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      <div
        id="editorjs"
        className="editor-js-formats bg-white border border-stone-100 rounded-lg py-6 px-8"
      />
    </>
  )
}
