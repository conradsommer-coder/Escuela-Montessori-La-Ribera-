const fs = require('fs');

let css = `@import url('https://fonts.googleapis.com/css2?family=Faustina:ital,wght@0,300..800;1,300..800&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: Verdana, Geneva, sans-serif;
  --font-display: "Faustina", serif;
  --font-serif: "Faustina", serif;
  
  --color-brand-foundation: #C17A51;
  --color-brand-knowledge: #353C72;
  --color-brand-growth: #8C9A84;
  --color-brand-balance: #E8DFD3;
  --color-brand-light: #F6F1E8;
  --color-brand-wisdom: #8B8A86;
  
  --color-montessori-green: #8C9A84;
  --color-montessori-red: #C17A51;
  --color-montessori-blue: #353C72;
  --color-montessori-ivory: #F6F1E8;
  --color-montessori-grey: #353C72;
  --color-montessori-line: #E8DFD3;
  --color-montessori-yellow: #C17A51;
  --color-montessori-purple: #353C72;
}

@layer base {
  body {
    @apply bg-brand-light text-brand-knowledge font-sans antialiased relative;
    background-color: var(--color-brand-light);
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-display font-semibold text-brand-knowledge;
  }
}

.font-serif {
  font-family: var(--font-serif);
}

.bg-m-red { background-color: var(--color-brand-foundation); }
.bg-m-blue { background-color: var(--color-brand-knowledge); }
.bg-m-green { background-color: var(--color-brand-growth); }
.bg-m-yellow { background-color: var(--color-brand-foundation); }

.blob-bg {
  position: absolute;
  z-index: -1;
  filter: blur(80px);
  opacity: 0.12;
  border-radius: 50%;
}
.rounded-montessori {
  border-radius: 40px;
}
`;

fs.writeFileSync('src/index.css', css);
