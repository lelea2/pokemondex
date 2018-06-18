### Pokemondex

##### Technology
* ReactJS
* Redux
* Jest

This repo is set up with create-react-app seeding originally

##### Structure
```
src/
├── actions # handle redux action
├── components # all UI components
├── constants # all action name
├── index.css
├── index.js
├── reducer.js
├── reducers
├── registerServiceWorker.js
├── store.js
└── translations
```


##### How to run

* Required: node >= 8.x

```
yarn i
// Start
yarn run start
// Watch on devmode
yarn run watch (local dev should restart when JS file change)
// Run unit Test
yarn run test (should see coverage)
```

When run `yarn run start` or `yarn run watch`, a new browser session should be automatically opened, view on http://localhost:8000 or http://localhost:3000 (depends on your Node server default port)

