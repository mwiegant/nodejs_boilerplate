# Nodejs Boilerplate

This project was created from the desire to have a pre-built nodejs template that can be used to make any type of
javascript web-server project.  It contains the basic configuration code needed in most new projects, and leaves all
the details of adding webpages, extra routes, or etc for you to implement.

This project follows most normally accepted standards on file names and file locations.

# Specifications

- This nodejs server was built as an Express application. Express handles the server creation and routing for this project. Read up on Express [here](http://expressjs.com/api.html#app.express).
- No templating engine is being used; to learn how to use a templating language (such as Jade or Ejs), [click here](http://expressjs.com/guide/using-template-engines.html).
- Html files should be put in the /views folder.
- All other resource files (js, less, css, etc) should be put in the /public folder, which will be sent to the browser along with the requested webpage on each refresh of the page.


# Running this project

To run this project go into your terminal, navigate to the folder containing this code, and execute the "run" script that is packaged with this project:

    ./run

