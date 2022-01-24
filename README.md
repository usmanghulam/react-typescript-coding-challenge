## Installation

1. Run `yarn` to install the dependencies in `package.json`
2. Run `yarn start` to host the website on http://localhost:3000.
3. Run `yarn server` to host the API on http://localhost:8080.
4. Use [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) on all files you edited before sending in your code test

## Tasks

1. **Authenticate**

   Use the Fetch API to make a `POST` request to `http://localhost:8080/authenticate` to receive a cookie

   - Add a page where a user can fill in an email and password
   - Add a new HTTP requests to the `useAPI` hook
   - The `POST` body should be JSON containing `email` and `password`

2. **Load data**

   Use the Fetch API to make a `GET` request to `http://localhost:8080/transactions?page=0` to receive data

   - Add a new HTTP requests to the `useAPI` hook
   - Add a `Route` and create a `NavLink` to it
   - Use `useQuery` for keeping track of the currently loaded page
   - When the user arrives on this page:
     - Reset page to 0
     - Remove previously loaded data
     - Send the request
   - Add a "More" button that loads in another page and **adds** the transactions to the table
   - Use spread operator inside of the `addTransactions` Redux reducer

3. **Display data**

   - Put all transactions available in the Redux store in a table
   - Use `Object.values(...).map(...)` inside of your JSX

4. **Delete data**

   Use the Fetch API to make a `GET` request to `http://localhost:8080/transactions/delete/<id>` to remove data

   - Add a new HTTP requests to the `useAPI` hook
   - Add a button on each table row, used to delete the transaction
   - Update the transaction in the Redux store with the API response
   - Do not render the transaction in the table when `deleted === true`
