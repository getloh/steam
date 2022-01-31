# SST - Steve's Steam Tool
A project using the Steam API to visualize game library data.

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Usage](#usage)

## General Information
Like many gamers, I found lockdown to be an opportunity to arrange a weekly games night with friends, the problem was that we were always so indecisive on what to play, while there are loads of popular steam tools out there, the majority are focused only on your own stats/information, similarly within steam you can select a game and see who else owns it, but there is no functionality to find games you have in common.
And so I set out to make my own - the app accepts multiple steam accounts, and then only shows games which are registered on all accounts.

## Technologies Used
- HTML + CSS (JSX)
- Javascript (ES6)
- React ([Create React App](https://github.com/facebook/create-react-app))
- [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/)
- [Styled-Components](https://styled-components.com/)
- [Steam Web API](https://developer.valvesoftware.com/wiki/Steam_Web_API)

## Features

### Search bar
Can use 2 different calls dependant on the input (a text username, or steamID).
Has logic to not add new information if the user has already been added/searched, or onscreen error messages if the search has been unsuccessful (invalid ID, network failure, or private profile)

### Game/user search
Grabs data from steam and displays all relevant available information, names, last seen timestamp, account birth month, how long each game has been played. All time related information has been converted from unix time or time in minutes.

### Multi user search
Uses vanilla javascript to search through multiple arrays of objects to find matching/common titles, tested successfully for 8 users (more theoretically possible). Dynamically hides irrelevant information at this stage like Playtime as not applicable for multiple users.

### Main page buttons
Allow for some extra information and inputs, such as specifying one's own API key - which will allow you to search for profiles relating to your own without the accounts having to be fully public (accounts are private/friendsOnly/public).
Opacity and transitions are used for smooth interface without additional load.

### Responsive layout
CSS rules to adjust and allow for smaller screens, items will wrap when appropriate, font sizes scale when needed, most UI elements only enlarge horizontally. CSS has been coded for vw/vh/em/rem/% where possible.

## Screenshots
Single user games list and playtime view

![https://meng.s-ul.eu/C8vCExyJ](https://meng.s-ul.eu/C8vCExyJ)

Comparing libraries between multiple users to find common denominators 

![https://meng.s-ul.eu/OFvISIgI](https://meng.s-ul.eu/OFvISIgI)

API key input in lieu of Steam login

![https://meng.s-ul.eu/EqA5Pb1T](https://meng.s-ul.eu/EqA5Pb1T)

Responsive layout for displays <600px

![https://meng.s-ul.eu/V9T0H7nD](https://meng.s-ul.eu/V9T0H7nD)

## Video
[https://gfycat.com/FineBeneficialAmericanmarten](https://gfycat.com/FineBeneficialAmericanmarten)

## Usage
This project will not work without an API key, this data has been omitted from github for obvious reasons, You can grab an API key from https://steamcommunity.com/dev/apikey assuming you have a steam account which has spent money in the store, then place it into a file as "\src\features\api\apikey.js" - "export const myapikey = 'apiStringHere'" .
With all the files on your computer, should be able to run it via npm start (maybe npm install first) though in practice this seems to result in a CORS error - I've managed to work around this with this [chrome extension](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc)

## To-do / Further possible improvements
Whilst I don't anticipate spending much more time on this project, the next features would be...
- hovering over a user account gives the option to remove it from the current search
- Friends list functionality - This could be as simple as pulling a list of a user's friends allowing them to be quick-added to the current search, or a seperate mode allowing to find Steam Friends which you have in common.
- Ability to sort the games list by Alphabetical or playtime. Currently the games appear in the order which steam provides (which is steam App ID ascending)
