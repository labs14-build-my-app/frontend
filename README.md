# DevFindr

You can find the deployed project at [https://www.devfindr.com](https://www.devfindr.com/)

##  Contributors

|       [Arkadiuz Kusiak](https://github.com/akusiak23)        |        [Benjamin Lopez](https://github.com/bejolo018)        |        [Anatoly Leytman](https://github.com/IlanL75)         |           [Jacob Tonna](https://github.com/Jtonna)           |       [Alfonso Garcia](https://github.com/alfonsog714)       | [Ruben Ponce](https://github.com/RubenPonce)                 |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/akusiak23) | [<img src="https://avatars2.githubusercontent.com/u/9092505?s=460&v=4" width = "200" />](https://github.com/bejolo018) | [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/IlanL75) | [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/Jtonna) | [<img src="https://avatars0.githubusercontent.com/u/34466548" width = "200" />](https://github.com/alfonsog714) | [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/RubenPonce) |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/akusiak23) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/bejolo018) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/IlanL75) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Jtonna) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/alfonsog714) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/RubenPonce) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/arkadiusz-kusiak/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/benjamin-lopez-bb379b185/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/anatoly-leytman-56795b19/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jtonna/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/alfonsog714/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/ruben-ponce/) |

<br>
<br>

## Project Overview

[Trello Board](https://trello.com/b/MfDQX4nx/labs-14-build-my-app)

[Product Canvas](https://www.notion.so/Build-My-App-d6520760ef3943648eea41c7ca63eccd)

DevFindr is a website that is designed to connect people with ideas for great web apps, with developers that have the skills to make those ideas a reality. Our app has a smooth interface that facilitates the networking and communication between project owners and developers. It is easier than ever using DevFindr, to either find work as a free lance web developer or to have your app ideas come to life as a project owner.

###  Key Features

- Project Owners can post a project idea to our website
- Developers can view a list of project proposals
- Project Owners can view all the plans submitted by developers and select the one that works for them


## Tech Stack

### Front end built using:

https://reactjs.org/

- React is the industry standard for creating powerful and adaptive web apps
- Our team has had comprehensive training using React and are familiar with its flow.



https://redux.js.org/

- Redux is a state-management tool that our team was already well-versed in.
- Used to control state and centralize it throughout the application.



#### Front end deployed to '[https://www.devfindr.com](https://www.devfindr.com/)'



#### [Back end](https://github.com/labs14-build-my-app/backend) built using:

Node.js

- We used express framework to make the endpoints and web application.
- We decided to learn non-SQL databases so we used MongoDB.
- We used Mongoose as our ODM (Object Data Modeling library).

# Authentication

https://jwt.io/

Handled on the back-end, JSON web tokens are saved in an array on the user object, allowing multiple authenticated sessions at a time (e.g they can be logged in on their phone and on their desktop). 

# Installation Instructions

Have yarn installed on your machine and use yarn install to download all the dependencies, yarn start with start up a development server and yarn build will create a production version.

## Other Scripts

    * install - installs dependancies
    * build - creates a build of the application
    * start - starts the production server after a build is created

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new list of variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/labs14-build-my-app/backend) for details on the backend of our project.
