### Apache-2.0 License
 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# MongoDB-Based Social Network API

## Table of Contents

- [Description](#Description)

- [Usage with Examples](#Usage)

- [Features](#Features)

- [Credits](#Credits)

## Description
This application programming interface (API) was created for a theoretical social network app. To do this, it uses MongoDB to store it's data, and Mongoose as an ODM to interact with the database from within JavaScript. It uses the common CRUD methods to create, read, update, and delete both users and thoughts, as well as creating and deleting reactions (which are like comments) to thoughts.

This app uses express.js to handle HTTP requests. It only uses a local MongoDB database, however it could be scaled for use in a larger database. This app was developed through a Linux operating system, but can run on both Windows and Mac computers, with the correct dependencies.

## Usage with Examples
The video below demonstrates the various functionalities of this API.

[Demonstration Video Link](https://youtu.be/tWP-XwiOXd4)

[![API Data Displayed Through Insomnia](https://img.youtube.com/vi/tWP-XwiOXd4/0.jpg)](https://www.youtube.com/watch?v=tWP-XwiOXd4)

## Features
This app has various features, for example any reactions are appended to the thoughts they are associated with. Also, the thoughts and users are stored in different collections, however when the data is collected, the data is populated to show all the connections in full, rather than just a list of IDs. An extra feature for this app is that when a user is deleted, all the thoughts associated with their account are deleted, too. This frees up space in the databse whenever a user is deleted.

## Credits
This application was created by Phoenix Staley, a currently independent, fullstack developer studying JavaScript through a University of Washington bootcamp, in addition to Computer Science through Washington State University.

If you would like to contribute to this project, or have any questions, please reach out! Here is [my email](mailto:PhoenixStaley_Developer@outlook.com).