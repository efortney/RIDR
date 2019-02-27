# To build the docker image, run docker build -t <username>/ridr . 
# in the root directory. To run the container, use the following: 
# docker container run -d -p 3000:3000 --name ridr <username>/ridr
# To stop the container, run docker container stop ridr 

# This will not be ideal for development because you will need to rebuild the
# container every time that you make a change. To do this, be sure to have 
# several tabs open that will allow you to stop, build, and start docker 

# specify the base image of node that this container is going to use 
FROM node:8

# we need to create a working directory that will store all the code for the image 
WORKDIR /app

# this will copy everything in RIDR into this directory
COPY . /app

# install all dependencies, the star ensures that both .lock and .json will be installed 
RUN npm install 

# this is where we set the default port that our backend server is going to run on
EXPOSE 5000 3000

# this is how the docker image will know how to start the application 
CMD npm run dev

