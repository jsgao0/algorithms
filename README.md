# About The Project

This is a TypeScript project template and it has developement environment including `eslint` with extended GTS settings. We can run `npm run lint` to check if the syntax is correct. Run `npm run start:build` and it will start watching our code changes before we start to develop. The built files will be placed under `dist` folder as the same directory structure just in `src`.

Also, we can execute the built code automatically by using `npm run start:run`. By default, it will execute the built file `dist/index.js`. We can run the specific built code by modifying the value `./dist/index.js` to what you want to execute in script `scripts.start:run` in `package.json` file.
