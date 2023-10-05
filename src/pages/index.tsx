import { Editor, ContentDebugger } from "@/components/Editor";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const onUpdate = (content: string) => {
    setContent(content);
  };

  return (
    <div className="container w-full m-auto flex flex-col  py-8 gap-4">
      <div className="text-4xl font-serif">
        Let&apos;s build a rich text editor
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Editor onUpdate={onUpdate} />
        <ContentDebugger codeString={content} />
      </div>
    </div>
  );
}
