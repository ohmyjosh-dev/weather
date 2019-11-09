# Weather
A Simple Weather App\
CurrentVersion: 1.0.0

## Description
A simple weather app

## Status
WIP! **Not production ready!**

## Demo
*Coming Soon*

## Prerequisites to run local
NodeJS and Angular CLI

## Setup Instructions
Open a terminal and complete the steps below:
### Step 1: Clone Repository
```
git clone https://github.com/ohmyjosh-dev/weather.git
```

### Step 2: Install Dependencies
In the **root directory**, run
```
npm install
```
then
```
cd client/
```
then
```
npm install
```

### Step 3: Create Configs
#### Create config directory
Make a new folder in the root directory named **config**

#### Create yahoo config object
Create a file in the config folder named **yahoo.json**.\
Paste the following into **yahoo.json** and replace the values from the ones you get from Yahoo's Weather API. *https://developer.yahoo.com/weather/*
```json
// config/yahoo.json
{
  "appId": "YOUR_APP_ID",
  "clientId": "YOUR_CLIENT_ID",
  "clientSecret": "YOUR_CLIENT_SECRET"
}
```

### Step 4: Run Project
#### Run using both Node Server and Angular Live Development Server
Open a terminal and navigate to the **root directory** and run
```
node index
```
If you have nodemon *https://www.npmjs.com/package/nodemon* installed, then you can run 
```
nodemon start
```
however nodemon is not a prerequisite.\
\
Open another terminal, navigate to **client/** and run
```
ng serve --open
```
The **--open** flag will open a browser to **localhost:4200**.\
The backend runs on **localhost:8080**

#### Run using only Node Server
Open a terminal and navigate to **client/** and run
```
ng build
```
then navigate to the **root directory** and run
```
node index
```
then open a browser and navigate to **localhost:8080**.


## Author
Joshua Clarke

## Github
https://github.com/ohmyjosh-dev/weather#readme

## Bugs
Please feel free to report bugs, however this is not a(n) LTS app.\
https://github.com/ohmyjosh-dev/weather/issues
