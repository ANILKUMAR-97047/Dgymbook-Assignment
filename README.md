# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Wordle Clone

This is a simple Wordle clone built using **React**. The game allows users to guess a 5-letter word and provides feedback on correct and misplaced letters.

## Features
- **Word Guessing**: Enter a 5-letter word and get feedback.
- **Keyboard Support**: Use physical or on-screen keyboard.
- **Dark Mode**: Toggle between light and dark themes.
- **SweetAlert2**: Popup messages for win/loss scenarios.
- **New Game Button**: Restart the game at any time.

## Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or later)
- **npm** (v6 or later) or **yarn**

## Installation
Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/ANILKUMAR-97047/Dgymbook-Assignment.git
   cd wordle-clone
   ```

2. **Install Dependencies**:
   Using npm:
   ```sh
   npm install
   ```
   Or using yarn:
   ```sh
   yarn install
   ```

3. **Run the Development Server**:
   ```sh
   npm start
   ```
   Or using yarn:
   ```sh
   yarn start
   ```
   This will start the app and open it in your default browser at `http://localhost:3000/`.

## Project Structure
```
wordle-clone/
│-- src/
│   ├── components/
│   │   ├── Grid.js
│   │   ├── Keyboard.js
│   │   ├── Message.js
│   │   ├── NewGameButton.js
│   ├── styles/
│   │   ├── Grid.css
│   │   ├── Keyboard.css
|   |   |___Message.css
|   |   |___NewGameButton.css
|   |__App.css
│   ├── App.js
│   ├── index.js
│-- public/
│-- package.json
│-- README.md
```

## Available Scripts
- `npm start` - Runs the app in development mode.
- `npm run build` - Builds the app for production.
- `npm test` - Runs tests.

## Technologies Used
- **React.js** - Frontend framework
- **SweetAlert2** - For alert messages
- **React Icons** - For theme toggle icons

## Deployment
To deploy the app, build it using:
```sh
npm run build
```
Then, you can deploy the `build/` folder to any static hosting service like **Vercel**, **Netlify**, or **GitHub Pages**.

## Contributing
If you'd like to contribute, feel free to fork the repository and submit a pull request!

## License
This project is licensed under the **MIT License**.
