import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = ({ onUpdate }: { onUpdate: (htmlContent: string) => void }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello React India 👋</p>",
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());
    },
  });

  return (
    <EditorContent
      editor={editor}
      className="h-full border border-slate-600 rounded-md p-4 prose"
    />
  );
};

export default Editor;
