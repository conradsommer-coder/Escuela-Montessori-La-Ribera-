import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Remove <motion.div> blobs
pattern_motion = r'(\s*<motion\.div\s*animate={{[^}]+}}\s*transition={{[^}]+}}\s*className="blob-bg[^>]+/>)'
content = re.sub(pattern_motion, '', content)

# Remove <div className="blob-bg">
pattern_div = r'(\s*<div className="blob-bg[^>]+/>)'
content = re.sub(pattern_div, '', content)

# Remove empty comment lines left over
content = re.sub(r'\s*{\/\* Decorative Blobs for Warmth \*\/}', '', content)
content = re.sub(r'\s*{\/\* Decorative Blobs \*\/}', '', content)

with open('src/App.tsx', 'w') as f:
    f.write(content)
