# Nodejs Boilerplate

This project was created from the desire to have a pre-built nodejs template that can be used to make any type of
javascript web-server project.  It contains the basic configuration code needed in most new projects, and leaves all
the details of adding webpages, extra routes, or etc for you to implement.

 If you are new to nodejs, this project is perfect for you.  Advanced (and at some point down the road, essential) elements like [task runners](http://gruntjs.com/) or testing frameworks([qunit](http://qunitjs.com/) or [jasmine](http://jasmine.github.io/), etc) have not been included in this project.  If you are looking for a reference to the true, core amount of code required to make a server work, this code is an excellent one to *star* and download.

# Specifications

### Standards

This project follows numerous, normally accepted standards on file names and file locations:
- .html and other template files ([jade](http://jade-lang.com/) or [ejs](http://www.embeddedjs.com/)) are located inside the */views* folder.
- the file that actually creates the server, *www.js* , is located inside the */bin* folder.
- the router, *router.js* , is located inside the */lib* folder.  This is a good folder to place other router files and important self-built library files.
- files that will be needed by webpages, such as **.js**, **.css**, or image files are all included in seperate sub-directories inside the */public* folder. 
- modules that are required for the application are listed as 'dependencies' inside the *package.json* file

### Implementation Notes (i.e., technologies used)

- This nodejs server was built as an Express application. Express handles the server creation and routing for this project. Read up on Express [here](http://expressjs.com/api.html#app.express).
- No templating engine is being used; to learn how to use a templating language (such as Jade or Ejs), [click here](http://expressjs.com/guide/using-template-engines.html).
- the *package.json* dependency list has been cleaned out, so only node.js-essential modules and express are listed as dependencies.  (Feel free to add more dependencies when you need them)

# Running this project

To run this project from the terminal, navigate to the folder containing this code and run one, or both, of the command below!

**FIRST RUN:** If this is your first time running this project, be sure to run **npm install** first! The word *sudo* may or may not be required for you, but in most cases adding *sudo* before a command will solve your problem on the command line.

    sudo npm install
    
If you have run **npm install** and have all modules installed, execute the "run" script that is packaged with this project to start the server:

    ./run

If at any point you wnat to kill the server from inside the terminal, hit **CTRL + C**.
