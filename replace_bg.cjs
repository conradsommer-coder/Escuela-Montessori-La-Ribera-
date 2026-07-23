const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/'bg-m-red'/g, "'bg-brand-foundation'");
content = content.replace(/'bg-m-blue'/g, "'bg-brand-knowledge'");
content = content.replace(/'bg-m-green'/g, "'bg-brand-growth'");
content = content.replace(/'bg-m-yellow'/g, "'bg-brand-balance'");
content = content.replace(/'bg-m-purple'/g, "'bg-brand-wisdom'");

fs.writeFileSync('src/App.tsx', content);
