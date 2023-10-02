import SyntaxHighlighter from "react-syntax-highlighter";
import pretty from "pretty";
import React from "react";

const ContentDebugger: React.FC<{ codeString: string }> = ({ codeString }) => {
  const formatted = pretty(codeString, { ocd: true });
  return (
    <SyntaxHighlighter language="html" showLineNumbers wrapLines>
      {formatted}
    </SyntaxHighlighter>
  );
};

export default React.memo(ContentDebugger);
