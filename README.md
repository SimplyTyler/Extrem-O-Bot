# Extrem-O-Bot
Multi-Tasking Discord Bots

### This project is to see how well we could multithread a discord bot across a couple differnet programming language. The main ones we will be focusing on will be JavaScript, C-Sharp, and Python.

# Setting up a bot in Linux

[node.js](https://nodejs.org/en/)]

## Sign in as root user and proceed to create a user by typing:
### Preferred OS Ubuntu 18.04 x64

```groovy
adduser bot
```
or
```groovy
sudo adduser bot
```

Login to this user create these files with the commands below.

```groovy
mkdir bot
```
```
cd bot
```
Now lets generate a package.json with the following Command

```
npm init -y
```
## Running your JavaScript Bot

```Java
npm install nodemon --save-bot
```
### Lets configurate the settings

Open your package.json and make sure you have the following pasted;

```JavaScript
{
  "name": "bot",
  "version": "2.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "bot": "nodemon index.js"
  },
```

Now lets start your bot, to start it and bring life run this command;

```groovy
npm run dev
```


Want PM2 follow the Official [Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)
