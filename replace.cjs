const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacements = {
  'montessori-green': 'brand-knowledge',
  'montessori-red': 'brand-foundation',
  'montessori-blue': 'brand-growth',
  'montessori-yellow': 'brand-balance',
  'montessori-ivory': 'brand-light',
  'montessori-grey': 'brand-knowledge', // Text should be readable, brand-knowledge (dark blue) is better than wisdom (light grey) for body text. Actually, let's use brand-wisdom for some, but brand-knowledge is safer for contrast. Let's map grey to brand-knowledge.
  'montessori-line': 'brand-balance',
  'montessori-purple': 'brand-foundation'
};

for (const [oldClass, newClass] of Object.entries(replacements)) {
  content = content.replace(new RegExp(oldClass, 'g'), newClass);
}

fs.writeFileSync('src/App.tsx', content);
