# Impact Alumni WEB

![Screenshot](./src/img/ss/Screenshot1.png)
![Screenshot](./src/img/ss/Screenshot2.png)
![Screenshot](./src/img/ss/Screenshot3.png)
![Screenshot](./src/img/ss/Screenshot4.png)
![Screenshot](./src/img/ss/Screenshot5.png)

## Tech Stack

- [**React**](https://reactjs.org/) JavaScript library for building user interfaces
- [**Semantic UI React**](https://react.semantic-ui.com/) React javascript user interface library

## Installation and Configuration

1. Run: `npm install` to install the dependencies

## Running

### Development

1. Run: `npm run start` to run the app

### Production

1. Run: `npm run build` to build the app

# Modusin Web with React

> Alumni is a publishing network for learners

The goal of this app is to clone a [Medium](https://medium.com) web app, called [Modusin](https://modusin.com).

![Screenshot](./assets/screenshot.png)

## Tech Stack

- React.js
- React Router
- Netlify
- Uniregistry

## App Structure

### React: View

- `src`

  - `index.js`: configures the whole React + Router + Redux
  - `App.js`: sets the routes for `pages`
  - `styles`: all global styles
    - `*.css`
  - `templates`: wraps `pages` components
    - `*.js`: usually formatted as `Layout*`
  - `pages`: contains `large` components
    - `*.js`
  - `large`: contains `medium` components
    - `*.js`
  - `medium`: contains `small` components
    - `*.js`
  - `small`: contains primitive DOM components

    - `*.js`

---

## Development

### Installing

Install `yarn` with `npm`

```sh
npm install -g yarn
yarn install
```

Create `.env` file that contains:

```sh
REACT_APP_API_URL=http://localhost:3000
REACT_APP_JWT_SECRET=myjwtsecret
```

This `.env` can be changed in `production` as well.

### Running

```sh
npm start
```

Also run the [backend API](https://github.com/ImpactAlumni/impactalumni-backend)

```sh
npm start
```

### Building

```sh
npm build
```

---

## Deployment

### Application

`node` => `react` => `react-scripts` => `react-app-rewired`

### Infrastructure

GitHub => Netlify

### Deploying

```sh
npm deploy
```

---

## License

[MIT License](./LICENSE)
