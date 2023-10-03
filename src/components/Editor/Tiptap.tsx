import TweetNode from "@/lib/Editor/extensions/tweet";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = ({ onUpdate }: { onUpdate: (htmlContent: string) => void }) => {
  const editor = useEditor({
    extensions: [StarterKit, TweetNode],
    content: `<p>Hello React India 👋</p><tweet tweetId="1708932196285784499"></tweet><p></p>`,
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());
    },
  });

  return (
    <EditorContent
      editor={editor}
      className="h-full border border-slate-600 rounded-md p-4 prose m-2 focus-visible:outline-none "
    />
  );
};

export default Editor;
