# RIDR

## What is RIDR?
RIDR is a PWA (Progressive Web App) that allows for a user to take full advantage of compaines such as Uber, Lyft, and local taxi companies all from one app. It is primarily a proof of concept as it is currently a violation of Uber's terms of service to user their API to compare prices with third parties. 

## Getting Started 
In order to run development for this project, you will need to have NPM / Node and React installed. Check the resources section below to find hyper-links to the respective web sites. 

### Starting the Server 
First we will need to install all dependencies. CD into the server directory, and run the command `npm -i`. This will look into your package.json file and automatically install all the packages that you will need. 

After running the above step, you can fire up the development server. At the server directory, run the command `npm run dev`. This will concurrently run both the front end and back end servers. Navigate to localhost:3000 in your browser if you are not automatically kicked there.  

### Docker 
Docker is a container platform that allows us to have a production or development enviroment easily deployed on any machine without having to fight against configuration issues. It is similar to a virutal machine, but it has several distinct advantages, mainly that containers can be built on top of eachother. This allows for the development of several containers that are responsible for performing specific tasks. When thinking in terms of scalability, this is one of the greatest solutions that is currently available.

### Development With Docker 
To start a docker container, youll first need to install Docker. Its pretty easy to install Docker, just go to the website and install it for the machine that you are using. After you have it installed, you will need to build your container and run it. To build the container, ensure that you are in the base of the RIDR directory, and run the following command: `docker build <username>/ridr .` (Be sure to put the period after ridr to specify the root directory). This will build a container locally on your system based off the Dockerfile located at the base of the project. Once you have built the container, ensure it exists with the command `docker ps`. When you have verified that the container does exist, run the command: `docker container run -d -p 3000:3000 --name ridr <username>/ridr`. This command simultaneously starts the server and exposed port 3000 to your machine, which is where the port that we are using for development. You will need to stop the container and rebuild each time that you make a change as it currently stands. To do this, run the command: `docker stop ridr`, and use the previous commands to build and run again. 

### About the Code 
Lets cut to the chase, you want to see where anything interesting happens. I agree.
Backend routes and the meat of the application primarily live in the routes/api/routes folder. This is where the server functionality lives, and includes our Uber, Lyft, and Yelp! API logic. Uber and Lyft have NPM packages that helped me to build RIDR without having to build out a package to handle the request/response data.I saw no point in writing a package to make requests when one already exists. 
RIDR uses a proxy to tie the front and backend together. The configuration for this exists in the package.json file in both the client directory and the src directory. I am using an NPM package that allows for me to start both the front and the backend servers "concurrently."



## Resources 
[Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[Unit Testing](https://jestjs.io/en/)

[Docker](https://www.youtube.com/watch?v=Kyx2PsuwomE)

[Continuous Integration (CI)](https://circleci.com/docs/)

[React](https://reactjs.org/)

[Node.JS](https://nodejs.org/en/)

[Bootstrap](https://getbootstrap.com/)

[Passport](http://www.passportjs.org/)

[Uber](https://developer.uber.com/)

[Lyft](https://developer.lyft.com/docs)

[Yelp](https://www.yelp.com/developers)

[PWA](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/)

[Material Design / UI](https://material-ui.com/)

[Google Maps](https://cloud.google.com/maps-platform/)
