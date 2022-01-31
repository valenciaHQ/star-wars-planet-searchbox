# Star wars planets looker

## Tech stack

- React (create-react-app)
- Styled components
- Cypress
- Prettier/eslint

## Notes

- Once the screen mounts, this fetch recursively over https://swapi.dev/api/planets/ as its has next attribute to load options for autocomplete.
- It has a global state implemented by ContextApi using `useReducer` hook
- App has a Theme injected by ContextAPI
- Autocomplete component has been built from scratch, it has room to improvements
- Eslint and prettier has been configured and the app its almost full typed
- Run Cypress with `yarn run cypress open`
- Run app first time with `yarn && yarn run start` then just `yarn run start`. More commands availables in package json, such as `lint` with fix option
- UI is simple, but list as scroll option.
- Implemented github actons flow to dependencies and type checking
