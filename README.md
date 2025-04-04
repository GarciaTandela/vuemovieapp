# Vue Movie App (vuemovieapp)

Vue Movie App Challenge

```bash
Use Node JS Version 22.14.0
```

## TMDb API Account

1. Create an API account in TMDb: https://www.themoviedb.org
2. Get your token from TMDb in order to use the application and make requests
3. Create a env file in the project with the following name: .env.local
4. Inside your env file put the following value: TOKEN=Bearer <your_token>
5. Note: It's essential to have your own token in order to the app work properly

## Install the dependencies

```bash
npm i -g @quasar/cli
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev or npm run dev
```

### Lint the files

```bash
npm run lint
```

### Format the files

```bash
npm run format
```

### Run tests

```bash
npm run test:unit
```

### Run tests in UI

```bash
npm run test:unit:ui
```

## Features in the project

- Listing Movies
- Pagination for movies
- Save, remove and listing movies favorites
- Change items per page in Search Movies
- Movie Details
- Listing related movies in Movie Details
- Responsiveness in other devices
- Tests included
- Search by movie title, description
- Filter by criteria Date, Genre
- Sort by functionality
