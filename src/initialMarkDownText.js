export const initialText = `
# Markdown Live demo

Changes are automatically rendered as you **type**.

## How about some code?

\`\`\`
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

You can do some \`Inline Code\` as well.

## Images

You can add images with \`![alt-text](link)\`

![Random 150x150 image](https://via.placeholder.com/150)

## Useful Links:

- [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)
- [Marked](https://www.npmjs.com/package/marked)
- [Dompurify](https://www.npmjs.com/package/dompurify)
- [React Markdown](https://www.npmjs.com/package/react-markdown)

> Created by [Daniel Floyd]('https://github.com/gleekzorp')
`;
