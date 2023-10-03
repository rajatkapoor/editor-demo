import {
  NodeViewContentProps,
  NodeViewProps,
  NodeViewRendererProps,
  NodeViewWrapper,
} from "@tiptap/react";
import React from "react";
import { Tweet } from "react-tweet";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  tweetId: string;
  exampleRequired: string;
};

const Input: React.FC<{ onUpdate: (tweetId: string) => void }> = ({
  onUpdate,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => onUpdate(data.tweetId);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
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

const TweetComponent = ({ node, updateAttributes }: NodeViewProps) => {
  const { tweetId } = node.attrs;

  const tweetIdString = tweetId;

  return (
    <NodeViewWrapper className="react-component">
      {tweetId && (
        <div data-theme="light">
          <Tweet id={tweetIdString} />
        </div>
      )}
      {!tweetId && (
        <Input onUpdate={(tweetId) => updateAttributes({ tweetId })} />
      )}
    </NodeViewWrapper>
  );
};

TweetComponent.displayName = "TweetComponent";

export default TweetComponent;
