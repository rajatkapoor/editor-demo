"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello React India 👋</p>",
  });

  return (
    <EditorContent
      editor={editor}
      className="h-full w-full border border-slate-600 rounded-md p-4"
    />
  );
};

export default Editor;
