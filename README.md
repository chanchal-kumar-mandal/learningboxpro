## Description
## LearningBoxPro React App
This is a React-based application for viewing a variety of free and premium video content. It features a clean UI, seamless video streaming, and Firebase for data storage and authentication. Premium content is available exclusively for subscribers.

## Live App: https://chanchal-kumar-mandal.github.io/learningboxpro/

## Demo Screenshots

## Requirements

### Install Nodejs
Download the Latest Node.js Installer:

Go to the official Node.js website: https://nodejs.org/en/.
Download the LTS (Long Term Support) version for Windows.
https://nodejs.org/en/download/

checking the version
$ node -v
$npm -v

### Install Visual Studio (VS) Code
https://code.visualstudio.com/download

### Install Extension In VS Code
1. Thunder Client 
2. ES7 React/Redux/GraphQL/React-Native Snippets 
3. Bracket Pair Colorizer 
4. Auto Rename Tag 
5. Live Server 
6. Prettier - Code formatter 

### Add Chrome Extension
React Developer Tools

### Install react app
$ npx create-react-app learningboxpro 

### Go to app directory
$ cd learningboxpro

### Install React Bootstrap: First, you need to install React-Bootstrap and Bootstrap in your project
$ npm install react-bootstrap bootstrap

### Check if the node_modules/bootstrap-icons/ folder exists. If not, re-install the package
$ npm install bootstrap-icons

### Install react-icons
$ npm install react-icons

### *** how to use firebase in my react app (ask chatgpt/google) also authenticate and stored data in firebase https://console.firebase.google.com/
$ npm install firebase

  
### Start app open (http://localhost:3000) to view it in your browser after run below command. 
$ npm start

### Push your code to github repo https://github.com/chanchal-kumar-mandal/learningboxpro
First create new repo in your github account like https://github.com/chanchal-kumar-mandal/learningboxpro
$ git remote add origin https://github.com/{username}/{repository-name}.git
$ git add .
$ git commit -am "Your message related to commit"
$ git push origin HEAD

### Host your app to github https://github.com/chanchal-kumar-mandal/learningboxpro

$ npm install gh-pages --save-dev



### Set up Firebase Hosting 
Follow https://console.firebase.google.com/project/learningboxpro/hosting/sites/learningboxpro
$ npm install -g firebase-tools
$ firebase login
$ firebase init
$ npm install firebase (skip if already done for auth or data store)
$ firebase deploy
$ firebase hosting:channel:deploy learningboxpro


### Reinstall All Dependencies: If you suspect multiple dependencies may be outdated, try reinstalling everything:

$ rm -rf node_modules package-lock.json
$ npm install

### Set up Github Hosting 
1. Create a GitHub Repository
2. Push Your React App to GitHub (if not already done)

	git init  # Initialize git if not done already
	git remote add origin https://github.com/username/repository-name.git  # Replace with your repository URL
	git add .
	git commit -m "Initial commit"
	git push -u origin main  # Push to the main branch
3. Install gh-pages Package
	$npm install gh-pages --save-dev
4. Add Scripts to package.json
	Open package.json and add the following:
	"homepage": "https://yourusername.github.io/repository-name"

	Update the scripts section in package.json to include deployment commands.
	"scripts": {
	  "start": "react-scripts start",
	  "build": "react-scripts build",
	  "test": "react-scripts test",
	  "eject": "react-scripts eject",
	  "predeploy": "npm run build",
	  "deploy": "gh-pages -d build"
	}
5. Build and Deploy Your React App
	$npm run build
	$npm run deploy
6. Enable GitHub Pages in Repository Settings
	Go to your repository on GitHub.
	Click on Settings (on the right side).
	Scroll down to the Pages section in the left sidebar.
	Under Source, select gh-pages branch.
	Click Save.
	Your site will now be available at: arduino
	Copy code
	https://username.github.io/repository-name/
7. Access Your Hosted React App
	Your React app will be live at https://yourusername.github.io/repository-name/.

### Imporatnat links
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Design Link: Home 1 in https://wordpress.iqonic.design/product/wp-free/geritcht/
CSS Link:  http://getbem.com/introduction/
