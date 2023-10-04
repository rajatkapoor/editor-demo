import {
  NodeViewContentProps,
  NodeViewProps,
  NodeViewRendererProps,
  NodeViewWrapper,
} from "@tiptap/react";
import React, { useState } from "react";
import { Tweet } from "react-tweet";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  tweetId: string;
  exampleRequired: string;
};

const Input: React.FC<{ onSubmit: (tweetId: string) => void }> = ({
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmitHandler: SubmitHandler<Inputs> = (data) =>
    onSubmit(data.tweetId);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-row gap-2 w-full  justify-between border border-slate-400 rounded-md p-1"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <input
        {...register("tweetId", { required: true })}
        className="px-2 border border-slate-200 rounded-md w-full"
        placeholder="Enter tweet id"
      />

      <input
        type="submit"
        className="border border-slate-400 rounded-md px-2 "
      />
    </form>
  );
};

const TweetComponent = ({
  node,
  updateAttributes,
  selected,
}: NodeViewProps) => {
  const { tweetId } = node.attrs;
  const [mode, setMode] = useState<"view" | "edit">(tweetId ? "view" : "edit");

  const tweetIdString = tweetId;
  const onSubmit = (tweetId: string) => {
    updateAttributes({ tweetId });
    setMode("view");
  };

  return (
    <NodeViewWrapper className="react-component relative">
      {tweetId && mode === "view" && (
        <div data-theme="light">
          <Tweet id={tweetIdString} />
        </div>
      )}
      {selected && mode === "view" && (
        <button
          className="border bg-white border-blue-400 rounded-md px-2 top-2 right-2  absolute"
          onClick={() => setMode("edit")}
        >
          Edit
        </button>
      )}
      {mode === "edit" && <Input onSubmit={onSubmit} />}
    </NodeViewWrapper>
  );
};

TweetComponent.displayName = "TweetComponent";

export default TweetComponent;
