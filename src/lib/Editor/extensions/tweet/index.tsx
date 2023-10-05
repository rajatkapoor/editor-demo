import {
  mergeAttributes,
  Node,
  nodeInputRule,
  nodePasteRule,
} from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import TweetComponent from "./component";

export const TweetNode = Node.create({
  name: "tweet",
  group: "block",
  inline: false,
  atom: true,

  addAttributes() {
    return {
      tweetId: {
        default: null,
        parseHTML: (element) => element.getAttribute("tweetId")?.toString(),
        renderHTML: (attributes) => {
          if (!attributes.tweetId) {
            return {};
          }
          return {
            tweetId: attributes.tweetId,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "tweet",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "tweet",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },

  //   /**
  //    *
  //    * This is how the generated content from above `renderHTML()` will be finally rendered
  //    */
  addNodeView() {
    return ReactNodeViewRenderer(TweetComponent);
  },

  /**
   * You can add multiple
   * These are the rules that you add to tell tiptap to pickup on while users are typing
   */
  //
  addInputRules() {
    return [
      nodeInputRule({
        find: /^%t/,
        type: this.type,
        getAttributes: (match) => {
          const tweetId = match[1];
          return { tweetId };
        },
      }),
    ];
  },
  addPasteRules() {
    return [
      nodePasteRule({
        find: /https:\/\/twitter\.com\/[a-zA-Z0-9_]+\/status\/([0-9]+)/g,
        type: this.type,
        getAttributes: (match) => {
          const tweetId = match[1];
          return { tweetId };
        },
      }),
    ];
  },
});

export default TweetNode;
