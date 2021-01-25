//////////////////////////////
// Using Marked and Dompurify
/////////////////////////////
import React, { useState } from "react";
import marked from "marked";
import { sanitize } from "dompurify";

import { initialText } from "./initialMarkDownText";
import "./styles.css";

export default function App() {
  const [text, setText] = useState(initialText);

  marked.setOptions({
    breaks: true
  });

  return (
    <div className="App">
      <textarea
        className="editor"
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div
        className="preview-wrapper"
        id="preview"
        dangerouslySetInnerHTML={{ __html: sanitize(marked(text)) }}
      />
    </div>
  );
}

////////////////////////
// Using React-Markdown
///////////////////////
// import React, { useState } from "react";
// import ReactMarkdown from "react-markdown";

// import { initialText } from "./initialMarkDownText";
// import "./styles.css";

// export default function App() {
//   const [text, setText] = useState(initialText);

//   return (
//     <div className="App">
//       <textarea
//         className="editor"
//         id="editor"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <ReactMarkdown className="preview-wrapper" id="preview" children={text} />
//     </div>
//   );
// }
