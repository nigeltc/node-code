**node-code - Node examples**

This project contains simple NodeJS example code:

1. *app.js* - a very simple NodeJS server
2. *test.js* - test functions in module mmm.js
3. *mmm.js* - a simple node module
4. *event-loop.js* - demonstrate the event loop
5. *tasks.js* - run two tasks
6. *callback.js* - demonstrate a callback
7. *synchronous.js* - demonstrate a synchronous call
8. *hell1.js* - demonstrate callback hell
9. *hell2.js* - demonstrate callback hell fix
10. *events.js* - demonstrate event handling
11. *args.js* - show command line arguments
12. *stream1.js* - read stream
13. *stream2.js* - write stream and pipe
14. *route.js* - handle routes in an HTTP server 

If you run a server, the url will be *workspacename-username.c9users.io*

To link to a github repository:

1. git init
2. git add .
3. git commit -m "First commit"
4. git remote add origin https://github.com/nigeltc/node-code.git
5. git push -u origin master

i.e. just the same as normally.

To avoid checking in node_modules, add it to .gitignore

To install all of mongodb don't just apt-get install mongodb-org, you need to get a later version.

    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
    echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
    sudo apt-get update
    sudo apt-get install -y mongodb-org

Ignore the errors setting up the mongodb-org configuration.

If you do install the incorrect version, 

    sudo apt-get remove mongodb* --purge

Conect to the database:

    mongo ds249575.mlab.com:49575/nex-mongo-test -u <dbuser> -p <dbpassword>

