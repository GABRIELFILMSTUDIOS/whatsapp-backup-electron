# Goal of this project
The ultimate goal of this project is to be read the databases of Messengers including at least WhatsApp (iOS and Android) and Signal and export them into a format that retains all or most data (including at least message text and metadata such as what message this is a reply to, message reactions and read/received timestamps). This format needs to be machine-readable and viewable with this app. This is currently not possible with the export function in WhatsApp, which only exports Message text, attached media and message timestamp.
The export format should be open-source and documented, to be able to reconstruct it when this software becomes abandonware. Ideally there should be an export method retaining as much data as possible but also being human-readable.
The App should be extendable, as to make it easy to integrate more messengers.

Additionally, the format of WhatsApps Database should be documented.

The ultiamte goal might never be archived, so the bare minimum goal for this project is an App to view as much data as possible from WhatsApps Database and is extendable to other messengers and to document WhatsApps Database.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). **Below instructions are not up-to-date as electron was included.**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
