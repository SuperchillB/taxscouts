# TaxScouts

Take-home assignment for a Frontend Engineer position at TaxScouts.
To run this project you can jump straight down to [this section](#getting-started).

## Context

Implement a quick search functionality as part of a larger app (i.e. not expecting this to be a standalone component) based on the following [**Figma wireframes**](https://www.figma.com/file/gQVK0BCychWR9itVUIFxoq/Practical-task?node-id=0%3A1).

Design a modern UI/UX on top of that.

Utilise the following technologies/libraries:

- React
- Redux
- styled-components

Use the appropriate APIs listed here: [https://openlibrary.org/dev/docs/api](https://openlibrary.org/dev/docs/api)

- Update the results in real-time as user types
- Be mindful of (perceived) performance
- Link results to Amazon search

Share the completed work in a public git repository. Send link via email.

## Features

#### Required:

- [x] Build async search component inside larger app
- [x] Provide modern UI/UX
- [x] Utilise React, Redux and styled-components
- [x] Use APIs from Open Library
- [x] Update the results in real-time as user types
- [x] Be mindful of (perceived) performance
- [x] Link results to Amazon search

#### Added:

- [x] Navigate to book details page
- [x] Show recently viewed books
- [x] Error handling using toasts

## Tech stack

| Type                            | Selected tool                          |
| ------------------------------- | -------------------------------------- |
| Dep package management          | `pnpm@7.30.0`                          |
| Build/Bundling tool / Local env | `vite@4.1.0`                           |
| Main library/framework          | `react@18.2.0` + `typescript@4.9.3`    |
| Router                          | `react-router@6.9.0`                   |
| State management                | `@reduxjs/toolkit@1.9.3`               |
| Data model                      | `rtk-query` (`@reduxjs/toolkit@1.9.3`) |
| Styling                         | `styled-components@5.3.8`              |
| Testing                         | `cypress@12.8.1`                       |
| Toast library                   | `react-toastify@9.1.1`                 |
| Linter                          | `eslint@8.35.0`                        |
| Formatter                       | `prettier@2.8.4`                       |

- This project was bootstrapped with [Vite](https://vitejs.dev/) using a [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) template
- The package manager used in this project is [pnpm](https://pnpm.io/)
- [React Router's new v6.9](https://reactrouter.com/en/main) is used in this project for better client-side routing (their newest features such as navigation-based data loading or simplified `<Suspense />`/ `<ErrorBoundary />` are not used in this app)
- External data fetching + caching is handled by [Redux Toolkit Query (RTK Query)](https://redux-toolkit.js.org/rtk-query/overview) for efficient external data state management
- State management is handled by [Redux Toolkit]https://redux-toolkit.js.org/) for easier state management and to reduce Redux boilerplating
- [Cypress](https://docs.cypress.io/) is used for both E2E and component testing
- Styling was done using [Styled Components](https://styled-components.com/), covering both responsiveness and basic accessibility

## Additional remarks

#### Improved general UI/UX:

- If given book has no ISBN, we link to a search page on Amazon BUT Open Library doesn't always provide an ISBN so some links might not work
- Error handling is provided using toasts (eg: when a request failed)
- Loading/Fetching UIs is managed using skeletons (both in search results component and book details page)
- Empty state illustrations and messages are displayed in both the search results component and book details page
- Recently viewed books are displayed in the homepage after navigating to a book details page

#### Performance / Optimisations gains:

- Open Library API often returns 500 errors so requests can be flaky (same goes with tests)
- Built a debouncer for the search input to limit the number of requests per user input
- Added a filter to the search query so that at least 4 characters must be typed before search becomes active (avoiding large requests for search queries with a single character)
- Made sure to paginate search results (using Open Library's `offset` parameter) and added a "Load More" button in the search results to trigger a new request each time the user gets to the bottom of the list
- Added filtering params to the search request to reduce the list of fields returned by the API

#### Responsiveness:

- App is responsive

#### Accessibility:

- App has basic accessibility (although could be improved)

#### Ecountered challenges:

- Open Library API not stable (often getting 500s)
- Open Library API: not able to fetch book by given "key" (had to use /search endpoint using the "q" param and attaching the "key" field to it). Best to use this endpoint instead of /books/:id because then you have to fetch the author name from /authors/:id.
- Not sure where to use Redux local state in an app like this one

#### Further improvements

- Accessibility: adding focus trap in search results box and general improvements
- Making use of React Router's error boundary and suspense logic (eg: error page)
- Using a schema declaration / validation library like `zod` or `yup`
- Cover more tests (eg: Redux store)
- Fix background blob
- UX: add feature in the search results box where user can click on "Load more" button up to a maximum number of times and then replace that button with a "View all results" button, which would open a page with all the (paginated) results

## Getting started

_Quick note: This project uses `pnpm` as the dependency package management tool. To install this tool, make sure you follow the instructions [here](https://pnpm.io/installation)._

Please run the following to install all the packages needed in this app:

### `pnpm install`

In the project directory, you can run:

### `pnpm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

### `pnpm cy:e2e`

Runs E2E Cypress tests to completion. By default, cypress run will run all tests headlessly.

### `pnpm cy:component`

Runs component Cypress tests to completion. By default, cypress run will run all tests headlessly.

### `pnpm cy:open`

Opens a Cypress browser window (Cypress Launchpad) and runs tests in the test runner.

### `pnpm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
