import Editor from "@/components/Editor";

export default function Home() {
  return (
    <div className="container w-full m-auto flex flex-col  py-8 gap-4">
      <div className="text-4xl font-serif">
        Let&apos;s build a rich text editor
      </div>
      <div className="h-full my-10">
        <Editor />
      </div>
    </div>
  );
}
