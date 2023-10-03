import TweetNode from "@/lib/Editor/extensions/tweet";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { set, get } from "idb-keyval";
import { useEffect } from "react";

const contentKey = `EditorContent`;

const Editor = ({ onUpdate }: { onUpdate: (htmlContent: string) => void }) => {
  const editor = useEditor({
    extensions: [StarterKit, TweetNode],
    onUpdate: ({ editor }) => {
      const htmlContent = editor.getHTML();
      set(contentKey, htmlContent);
      onUpdate(htmlContent);
    },
  });

  useEffect(() => {
    get(contentKey).then((content) => {
      editor?.commands.setContent(content);
    });
  }, [editor]);

  return (
    <EditorContent
      editor={editor}
      className="h-full border border-slate-600 rounded-md p-4 prose focus-visible:outline-none"
    />
  );
};

export default Editor;
