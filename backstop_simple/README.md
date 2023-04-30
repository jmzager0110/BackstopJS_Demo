##Backstop Simple
This iteration of backstop will use organized JSON files to be ran by 

- backstop reference --configPath=./backstop.js
- backstop test --configPath=./backstop.js

### Current State
Currently, this iteration works, however, only one scenario can be loaded per JSON file  within the scenarios directory.

More refactoring is needed as this is not the intended result.