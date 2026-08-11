import os
import re

directory = r"d:\.figma\src"
replacements = [
    (r"rgba\(255,\s*255,\s*255,\s*0\.02\)", "var(--white-2)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.03\)", "var(--white-3)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.05\)", "var(--white-5)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.06\)", "var(--white-6)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.08\)", "var(--white-8)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.1\)", "var(--white-10)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.12\)", "var(--white-12)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.15\)", "var(--white-15)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.2\)", "var(--white-20)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.25\)", "var(--white-25)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.3\)", "var(--white-30)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.35\)", "var(--white-35)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.4\)", "var(--white-40)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.45\)", "var(--white-45)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.5\)", "var(--white-50)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.6\)", "var(--white-60)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.7\)", "var(--white-70)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.8\)", "var(--white-80)"),
    (r"rgba\(255,\s*255,\s*255,\s*0\.9\)", "var(--white-90)"),
]

for root, _, files in os.walk(directory):
    for f in files:
        if f.endswith(".tsx") or f.endswith(".ts") or f.endswith(".css"):
            path = os.path.join(root, f)
            with open(path, "r", encoding="utf-8") as file:
                content = file.read()
            
            new_content = content
            for old, new in replacements:
                new_content = re.sub(old, new, new_content)
            
            if new_content != content:
                with open(path, "w", encoding="utf-8") as file:
                    file.write(new_content)
                print(f"Updated {path}")
