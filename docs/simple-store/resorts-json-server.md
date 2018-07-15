# Resorts JSON Server

I ~~really enjoy~~ absolutely love to ski.
In fact, it's one of the reasons why I moved to Denver.
That, and good beer.
Feel free to buy me one later.😉

## Resorts API

We'll be using a REST API to learn how to write actions that are intended for asynchronous loading of persisted data from a backend.

[JSON Server](https://github.com/typicode/json-server) provides a fake REST API based on the values in the *server/db.json file*.

Start the server via:

```bash
yarn start
npm run start
```

You can see a list of the endpoints at: [http://localhost:3000](http://localhost:3000).

We'll be primarily using the /resorts endpoing: [http://localhost:3000/resorts](http://localhost:3000/resorts).
This will enable us to load a (fairly large and complete) listing of ski resorts around the world.