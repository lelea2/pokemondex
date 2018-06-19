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

* When run `yarn run start` or `yarn run watch`, a new browser session should be automatically opened, view on http://localhost:8000 or http://localhost:3000 (depends on your Node server default port)

* Unit test coverage: UI snapshot, UI interaction and reducers

---------------------------|----------|----------|----------|----------|-------------------|
File                       |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
---------------------------|----------|----------|----------|----------|-------------------|
All files                  |    34.54 |    30.95 |    24.32 |    42.68 |                   |
 src                       |        0 |        0 |        0 |        0 |                   |
  index.js                 |        0 |        0 |        0 |        0 |... 5,7,9,10,12,20 |
  reducer.js               |        0 |        0 |        0 |        0 |           1,2,3,4 |
  registerServiceWorker.js |        0 |        0 |        0 |        0 |... 36,137,138,139 |
  store.js                 |        0 |        0 |        0 |        0 |... 14,17,21,24,26 |
 src/actions               |    33.33 |        0 |        0 |    33.33 |                   |
  action.js                |    33.33 |        0 |        0 |    33.33 |... 42,143,151,152 |
 src/components            |    69.09 |    53.33 |    53.33 |    69.09 |                   |
  App.js                   |       50 |       50 |    30.77 |       50 |... 70,71,72,73,78 |
  Detail.js                |    53.33 |       45 |    42.86 |    53.33 |... 12,13,18,22,40 |
  PokemonCell.js           |      100 |      100 |      100 |      100 |                   |
  PokemonList.js           |      100 |      100 |      100 |      100 |                   |
  Searchbox.js             |    88.89 |       50 |       80 |    88.89 |                28 |
 src/constants             |      100 |      100 |      100 |      100 |                   |
  actionTypes.js           |      100 |      100 |      100 |      100 |                   |
 src/reducers              |     87.5 |    58.33 |      100 |     87.5 |                   |
  pokemonDetail.js         |       75 |     62.5 |      100 |       75 |                23 |
  pokemonList.js           |      100 |       50 |      100 |      100 |                11 |
 src/translations          |      100 |       50 |      100 |      100 |                   |
  index.js                 |      100 |       50 |      100 |      100 |              8,14 |
 src/translations/en       |        0 |        0 |        0 |        0 |                   |
  index.js                 |        0 |        0 |        0 |        0 |                   |
---------------------------|----------|----------|----------|----------|-------------------|


##### Features
* 1.1) Navigate to http://localhost:3000, display the first 151 pokemon on left pane
* 1.2) User click on one of the pokemon badge, the right panel should display pokemon's detail
* 2.1) Searchbar: search by pokemon id or name. Enter text and hit enter to get result
* 2.2) Result displayed on the right panel
* 2.3) Error message will be displayed for invalid search.


