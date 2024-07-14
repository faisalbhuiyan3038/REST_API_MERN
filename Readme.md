# Creating a REST API with Node

Technologies Used: Node, Express, TypeScript & MongoDB + Authentication.

- Initializing the project :

  `npm init -y`

  This is going to setup package.json with default options.

  To install TypeScript, run:

  `npm install -D typescript`

  We also need ts-node for TypeScript, run:

  `npm install -D ts-node`

  (Optional) Install nodemon to auto-reload file changes:

  `npm install -D nodemon`

- Configure TypeScript:

  Create `tsconfig.json` file in the root directory on the same level as node-modules folder.

  Set the following options:

  ```json
  {
    "compilerOptions": {
      "module": "NodeNext",
      "moduleResolution": "Node",
      "baseUrl": "src",
      "outDir": "dist",
      "sourceMap": true,
      "noImplicitAny": true
    },
    "include": ["src/**/*"]
  }
  ```

  Create file `index.ts` in src folder of root directory. For testing, type `console.log("Hello Typescript")` and run it.

- Configure Nodemon:

  Create a nodemon.js file in root directory on the same level as node-modules folder.

  ```json
  {
    "watch": ["src"],
    "ext": ".ts,.js",
    "exec": "ts-node ./src/index.ts"
  }
  ```

Add a start script in `package.json` :

```json
"scripts": {
"start": "nodemon",
}
```

Run `npm start` to start it.

- Setup Express:

  Essential code for Express:

  ```ts
   import express from "express";
  import http from "http";
  import cookieParser from "cookie-parser";
  import compression from 'compression';
  import cors from "cors";

  const app = express;

  //this is important for authentication
  app.use(cors{
      credentials: true;
  });

  app.use(compression());
  app.use(cookieParser());
  app.use(express.json()); // Use built-in body parser
  app.use(express.urlencoded({ extended: true })); // Use built-in URL-encoded parser

  const server = http.createServer(app);
  server.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
  })
  ```

  Then install the packages.

  `npm i express body-parser cookie-parser compression cors`

  Then, `npm i -D @types/express @types/body-parser @types/cookie-parser @types/compression @types/cors`

  This will get rid of type errors.

  Note: Body-parser is built into Express now, so no need to install separately.
