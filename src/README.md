# Introduction

Read LESS variables from the contents of a file and generates pretty formatted js file.

## When do you need it?

If you will come up to the point when you would like to have the same variables in your LESS and Javascript,
not put an extra effort to keep them synchronized. This scenario can have a life if you use some third-party libraries
which require from you color variables in javascript, or when in some cases you need to use dynamic variables used in 
"styles" attribute of element. One of such examples is when you have a different color of your icon depends on some 
conditions.  

## How to use it?

### I want to use pure javascript

```javascript
    import fs from 'fs';
    import {generateJsFile} from 'less-vars-to-pretty-js';

    const lessVariables = fs.readFileSync('../styles/variables.less', 'utf8');
    generateJsFile(lessVariables, '../styles/variables.js');
```

## I want to add it to my gulp pipeline

```javascript
    import fs from 'fs';
    import gulp from 'gulp';
    import {generateJsFile} from 'less-vars-to-pretty-js';

    gulp.task('generate-js-vars', () => {
        const lessVariables = fs.readFileSync(`../styles/variables.less`, 'utf8');
        return generateJsFile(lessVariables, '../styles/variables.js');
    });
```
