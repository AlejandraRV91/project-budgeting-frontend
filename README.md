<!-- @format -->

# Transaction Management Project (Frontend)

This project is the frontend of a transaction management application that allows you to create, read, update, and delete transactions. It provides to the user an interface for interacting with the transaction API which was created for this project.

## The Backend

The previously mentioned project can be seen through the following link, API: `https://github.com/AlejandraRV91/project-budgeting-backend`

## Deploy

This project is temporarily deployed in: `https://glistening-frangollo-ae305a.netlify.app`

## Requirements

-   Node.js (version 18.16.0)
-   NPM (version 9.6.6)

## Installation

1. Clone this repository to your local machine:

```shell
git clone https://github.com/AlejandraRV91/project-budgeting-frontend.git
```

2. Navigate to the project directory:

```shell
cd project-budgeting-frontend
```

3. Install project dependencies:

```shell
npm install
```

## Configuration

1. Create a `.env` file in the root directory of the project.

2. Inside the .env file once your visual code is open,proceed to paste in the `REACT_APP_API_DEV` variable with the URL of your backend API:

```shell
REACT_APP_API_DEV=http://localhost:5000
```

## Usage

1. Start the server:

```shell
npm start
```

2. The application will be accessible at `http://localhost:3000` in your browser.

3. Try out either of the following managament transactions from the application , such as including, creating, updating, and/or deleting transactions.

## Folder Structure

The project follows a common folder structure for a React application:

-   `public`: Contains the HTML template and other static assets, for example you can notice the logo image I used for this project.
-   `src`: Contains the application's sources with their respective .js files and .css files and a "subfolder" named Components.
-   `components`: Contains reusable components in .js files to be used throughout the application.
-   `App.js`: The main entry point of the application.
-   `index.js`: The entry point for rendering the application.

## Contributing

Contributions are welcome! If you find any issue or have suggestions for improvements, please open an issue or submit a pull request.