const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const pattern_motion = /\s*<motion\.div\s*animate={{[^}]+}}\s*transition={{[^}]+}}\s*className="blob-bg[^>]+\/>/g;
content = content.replace(pattern_motion, '');

const pattern_div = /\s*<div className="blob-bg[^>]+\/>/g;
content = content.replace(pattern_div, '');

content = content.replace(/\s*{\/\* Decorative Blobs for Warmth \*\/}/g, '');
content = content.replace(/\s*{\/\* Decorative Blobs \*\/}/g, '');

fs.writeFileSync('src/App.tsx', content);
