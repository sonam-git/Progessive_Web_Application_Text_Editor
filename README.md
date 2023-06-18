# Progressive Web Application Text Editor 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description.

Repository containing the code for the Text Editor Progressive Web Application (PWA). This is a both a front and back-end application that takes user input and saves it to the local storage and the local IndexedDb. The user is given a text editor where the user can enter any data or snippets of code that will be saved for future use. The application can also be installed on user's device and is available offline (from the machine that the user has been using the application).

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Instruction](#Usage-Instruction)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)
- [License](#License)
- [Author](#Author)

# Overview

## The Challenge:
* Offline Functionality 
* Implementation of concurrently in the scripts to provide convenient commands to build,start and manage the server and client in different enviroment.
* Implementation of idb package, and indexedDB API.
* Implementation of proper data persistence techniques that serve as redundancy in case one of the options is not supported by the browser

## Assigned User Story:
```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria:
```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```


## Usage Instructions:

#### To access application :
1. Go to https:herokuapp.com/ to access the application
2. From the editor screen, add, edit, or delete data
3. Changes will be automatically saved once the user moves away from the editor.

#### To view browser storage :
1. Go to https://herokuapp.com/ to access the application
2. Right click on the page and select inspect.
3. In the chrome dev tools, navigate to the "applications" tab.
4. Go through the following links from the left hand side and inspect
* Application:
    *  Manifest
    *  Service Workers
* Storage
    * local storage
    * IndexedDb
* Cache
    * Cache Storage

 #### To install application :
1. Go to https://.herokuapp.com/ to access the application
2. Click on the install button on the top left.
3. Click Install on the prompt
  *   the application will launch in a separate window
  *   NOTE: the install button will disappear 3 seconds after the click

 #### To launch installed application :
1. Open Chrome
2. Type the following in Chrome's address bar
    ```
    chrome://apps

    ```
3. Select the JATE application from the resulting list


## Deployed Application Link:
[Deployed Application Link:]()

## GitHub Repository:
[GitHub Repository:](https://github.com/)


## Screenshots:
![](public/assets/images/NOSQL.png)

## Installation Process:
1. Clone the Repository from GitHub (or) Download Zip Folder from Repository from GitHub.
2. Open the cloned (or downloaded) repository in any source code editor.
3. Open the integrated terminal of the document and complete the respective installation guides provided in "Built With" to ensure the cloned documentation will operate.

## Built With:
- Concurrently [Concurrently](https://www.npmjs.com/package/concurrently)
- Webpack.js: [webpack](https://webpack.js.org/configuration/dev-server/)
- Dynamic JavaScript
- Express: [4.18.2](https://www.npmjs.com/package/express)
- Node.js: [16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Babel: [7.22](https://babeljs.io/)
- Nodemon: [2.0.12](https://www.npmjs.com/package/nodemon/v/2.0.12)
- License Badge: [Shields.io](https://shields.io/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned:

* Implementation of concurrently in the scripts to provide convenient commands to build,start and manage the server and client in different enviroment.
* Proper implementation of idb package, and indexedDB API.
* Implementation of proper data persistence techniques that serve as redundancy in case one of the options is not supported by the browser
* How to make a single-page application that meets the PWA criteria.
* How to make your application functioning offline.


### Continued Development:
1. have the ability to connect to external database to store data.
2. have all code snippets in separate documents that can be stored, accessed, modified, or deleted individually
3. remove the install button if the app is already installed or modify the button to launch the application

## License 
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Author

* Follow me on Github at [Sonam J Sherpa](https://github.com/sonam-git)
* Additional questions or concerns? feel free to contact me at [Email](sherpa.sjs@gmail.com)
