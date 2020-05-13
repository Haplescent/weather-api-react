This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### `Information flow of website`

App.js will be a class component that has a state.  Upon App.js mounting, constructor method will be called and state with attribute called textInput will be assigned to an empty string.  Class App.js will have a method call handleSubmit() which will setState of textInput.  App.js will then render a functional component called SearchAppBar, passing this.handleSubmit method into SearchAppBar's props.  SearchAppBar will then render functional component TemporaryDrawer.  SearchAppBar will have a helper function named handleClick which will execute props.handleSubmit. SearchAppBar will then render a functional component Form and pass handleClick into Form props as onSubmit .  Form is a functional component from material designs UI which will run prop.onSubmit on clicking or hitting enter. Form's prop.onSubmit will call SearchAppbar's props.handleClick which will call App's this.handleSubmit which will call setState() to change state and this restart the react lifecycle.

When textInput from App.js has been changed via setState() in the class method call handleSubmit(), React will run getDerivedStatefromProps, which will do nothing, and shouldComponentUpdate, which will return true.  App.js will then run render, rerender as described above.  App.js will then call componentDidMount, which will call fetch().  Fetch will use this.state.textInput to search cities using the following url api.openweathermap.org/data/2.5/weather?q={textInput}&appid={your api key}.  fetch will return a object which componentDidMount will parse into 