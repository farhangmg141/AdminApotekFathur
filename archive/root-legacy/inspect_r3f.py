import pathlib
root = pathlib.Path('node_modules/@react-three/fiber/dist')
found = False
for p in root.rglob('*.js'):
    text = p.read_text(errors='ignore')
    if '__SECRET_INTERNALS' in text or '.S' in text:
        print('FILE', p)
        for i, line in enumerate(text.splitlines(), 1):
            if '__SECRET_INTERNALS' in line or '.S' in line:
                print(i, line)
        found = True
        break
if not found:
    print('NOT FOUND')
