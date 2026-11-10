import {access} from 'node:fs/promises'; await access('dist/index.html'); console.log('Static site ready');
