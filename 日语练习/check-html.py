import re
path = r'D:\iCloud云盘\iCloudDrive\2026工作-HP电脑\Cursor相关\日语练习\日语学习工具.html'
html = open(path, encoding='utf-8').read()

# Simple div stack tracker
stack = []
line_no = 1
pos = 0
issues = []

def line_at(p):
    return html.count('\n', 0, p) + 1

for m in re.finditer(r'</div\s*>|<div[^>]*>', html):
    tag = m.group(0)
    ln = line_at(m.start())
    if tag.startswith('</'):
        if not stack:
            issues.append(f'L{ln}: extra closing div')
        else:
            stack.pop()
    else:
        id_m = re.search(r'id="([^"]+)"', tag)
        cls_m = re.search(r'class="([^"]+)"', tag)
        label = id_m.group(1) if id_m else (cls_m.group(1).split()[0] if cls_m else 'div')
        stack.append((label, ln))

print('Unclosed divs at end:', len(stack))
for s in stack[-10:]:
    print('  still open:', s)

# Find key elements
for eid in ['app-main', 'app-shell', 'intro', 'lesson1', 'lesson2', 'dynamic-lessons-container']:
    idx = html.find(f'id="{eid}"')
    print(f'{eid}: char {idx}, line {line_at(idx) if idx>=0 else "MISSING"}')

# Check if lesson2 is inside app-main
am = html.find('id="app-main"')
am_close = html.find('<!-- app-main -->')
l2 = html.find('id="lesson2"')
print(f'lesson2 inside app-main: {am < l2 < am_close if am>=0 and am_close>=0 and l2>=0 else "unknown"}')

# Count main-panel
panels = re.findall(r'id="(lesson\d+|intro)" class="main-panel', html)
print('main-panels:', len(panels), panels[:5], '...', panels[-3:])
