## Todos

- [x] add debouncer to searchbar
- [x] add lazy loading or 'load more' button
- [x] prefilter search so it fetches only if at least 3 characters typed
- [x] add link to Amazon search
- [x] add error handling
- [x] fix skeleton so we can see both skeleton and already fetched data when click on load more
- [x] cancel previous ongoing requests => Interview: That assumes that aborting a request in the browser would actually stop it on the server. Usually, that is not the case at all. Server processing usually continues.
- [x] use data in list items
- [x] improve styling for list items (eg: cover)
- [x] use Covers API to fetch images: https://openlibrary.org/dev/docs/api/covers
- [x] !! recently viewed feature

- [] add ErrorPage / 404 Page
- [] fix bg blob
- [] install jest-styled-components (https://styled-components.com/docs/tooling)
- [] set up tests with Cypress
  - [] Test window object
  - [] Check spies stubs clocks
- [] check accessibility (focus trap inside dropdown)
- [x] check responsiveness
- [x] add mock UI in homepage
- [] add git hooks?
- [] write test for utils

## Remarks

- General UI/UX:
  - If no ISBN, we link to a search page on Amazon BUT Open Library doesn't always provide an ISBN so some links might not work
  - Error handling using toasts
  - Loading/Fetching Uis using skeletons (both search results and book details page)
  - Empty state illustrations and message
  - Displaying recently viewed books with navigation to details page
- Tech stack (use table like Clearscore)
  - Extra libraries: react-toastify, react-router
- Performance / Optimisations
  - Open Library API often returns 500 errors so requests can be flaky
  - Debouncer on search input
  - Filtered search query (minimum 3 characters before search becomes active)
  - Paginated search results + Load More button
  - Filtered request params (not fetching everything)
- Responsiveness
  - App is responsive
- Accessibility
  - App has basic accessibility
- Ecountered challenges
  - Open Library API not stable (often getting 500s)
  - Open Library API: not able to fetch book by given "key" (had to use /search endpoint using the "q" param and attaching the "key" field to it). Best to use this endpoint instead of /books/:id because then you have to fetch the author name from /authors/:id.
  - Not sure where to use Redux local state in an app like this one
- Further improvements
  - Accessibility: adding focus trap in search results box
  - Adding an error page using React Router's error boundary
