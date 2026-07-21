import fs from 'fs';
const h = fs.readFileSync('日语学习工具.html', 'utf8');
const stack = [];
const re = /<\/?div[^>]*>/g;
let m;
const markers = {};
while ((m = re.exec(h)) !== null) {
  const pos = m.index;
  const ln = h.slice(0, pos).split('\n').length;
  if (m[0].startsWith('</')) {
    stack.pop();
  } else {
    const id = (m[0].match(/id="([^"]+)"/) || [])[1];
    if (id) markers[id] = { depth: stack.length, line: ln, parent: stack[stack.length - 1] || null };
    stack.push(id || '?');
  }
}
for (const id of ['app-main', 'intro', 'lesson1', 'lesson2']) {
  console.log(id, markers[id]);
}
console.log('unclosed', stack.length, stack.slice(-5));
