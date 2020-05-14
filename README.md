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

1) App.js will be a class component that has a state.  Upon App.js mounting, constructor method will be called and state with attributes called textInput, currentWeather, and fiveDayForecast will be assigned to an empty string, empty object, and empty object respectively.  Class App.js will have a method call handleSubmit() which will setState of textInput.  

2) When App.js renders, it will call a functional component called SearchAppBar, passing this.handleSubmit method into SearchAppBar's props.  SearchAppBar will then render functional component TemporaryDrawer.  SearchAppBar will have a helper function named handleClick which will execute props.handleSubmit. SearchAppBar will then render a functional component Form and pass handleClick into Form props as onSubmit .  Form is a functional component from material designs UI which will run prop.onSubmit on clicking or hitting enter. While App.js will render these children functional props on mounting, it will not call setState() until a click has occured.

3) App.js will render CurrentWeatherCard functional component, passing prop currentWeather (an empty object).  CurrentWeatherCard will see an empty object in props and render the introduction card, this introduction card will have basic information about the website. 

4) App.js will also render FiveDayForecast functional component, passing prop fiveDayForecast (an empoty object).  CurrentWeatherCard will see an empty object in props and render nothing.  

5) When App.js finishes render() method, it will then call ComponentDidMount, which will do nothing

6) After componentDidMount finishes, App.js class component, as well as all children components of App.js, is fully mounted and ready for user input.

7) The user inputs text (which will be a city name the user wants the weather for) and hits the submit but or enter. Form's prop.onSubmit will call SearchAppbar's props.handleClick which will call App's this.handleSubmit which will call setState() to change state.  this will start the react lifecycle. 

8) React will run shouldComponentUpdate().  shouldComponentUpdate will compare prevprops to props and see a change in textInput and return true.

9) React will repeat Steps 2-4. It will continue to render the intro screen in CurrentWeatherCard functional component and nothing in FiveDayForecast functional component, as their respective props are still empty.

10) App.js will then call componentDidUpdate, which will call fetch().  fetch will use this.state.textInput to search cities using the following url api.openweathermap.org/data/2.5/weather?q={textInput}&appid={your api key}.  fetch will return a object which componentDidMount will parse.  Fetch will be sucessful, given that user inputted a city.  The currentWeather object and fiveDayForecast this.state objects willl be reassgined using setState().  This will restart the react lifecycle.

11) React will run shouldComponentUpdate().  shouldComponentUpdate will compare prevState to state and see a change in currentWeather and fiveDayForecast object and return true.

12) App.js will render CurrentWeatherCard functional component, passing prop currentweather (now an objecting containing current weather information from openweathermap api.  CurrentWeatherCard will parse through this object and display the object's information using pictures and text)

13) App.js will render FiveDayForecast functional component, passing prop fiveDayForecast (now an object containing the 5 day forecast weather information from openweathermap api.  fiveDayForecast will prase through this object and display the object's information using pictures and text)

14) React will repeat step 10.

15) react will run shouldComponentUpdate().  shouldComponentUpdate will compare prevProps to props and prevState to state and see no change.  shouldComponentUpdate will return false

16) react will then do nothing and will wait for user input.

17) If user inputs another text to search bar, react will start again from step 7.
