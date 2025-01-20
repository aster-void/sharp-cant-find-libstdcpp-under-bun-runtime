repro:

1. run `node main.mjs`
you get a resized grayscale image of shark.

2. run `bun main.mjs`
error as:

```text
108 |   }
109 |   help.push(
110 |     '- Consult the installation documentation:',
111 |     '    See https://sharp.pixelplumbing.com/install'
112 |   );
113 |   throw new Error(help.join('\n'));
              ^
error: Could not load the "sharp" module using the linux-x64 runtime
ERR_DLOPEN_FAILED: libstdc++.so.6: cannot open shared object file: No such file or directory
Possible solutions:
- Ensure optional dependencies can be installed:
    npm install --include=optional sharp
- Ensure your package manager supports multi-platform installation:
    See https://sharp.pixelplumbing.com/install#cross-platform
- Add platform-specific dependencies:
    npm install --os=linux --cpu=x64 sharp
- Consult the installation documentation:
    See https://sharp.pixelplumbing.com/install
      at <anonymous> (/home/aster/repro-sharp-libstdcpp/node_modules/sharp/lib/sharp.js:113:9)
      at <anonymous> (/home/aster/repro-sharp-libstdcpp/node_modules/sharp/lib/constructor.js:10:1)
      at <anonymous> (/home/aster/repro-sharp-libstdcpp/node_modules/sharp/lib/index.js:6:7)

Bun v1.1.43 (Linux x64)
```
