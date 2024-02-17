Node Package manager-
1. Command to install - 
npm i -g npm@5.5.1
2. Command to initialize package.json- 
a. npm init
b. npm init --yes
3. How to add third party library using npm?
npm install underscore
4. Install mongoose.
npm i mongoose

Each package has its own dependecies, each package has its package.json and package-log.json ..

5. Semantic versioning-
THe version of a package has three componnets-
Major.Minor.Patch  4.13.6  -> 4 is major version, 13 is Minor version, 6 is Patch  
~ -> Interested in newer patch while major and minor are freezed
^ -> Newer Stable minor version/patch version

5. How to list the installed packages?
npm list
npm list --depth=0 For only the dependencies installed by us.

6. How to view info for a package?
npm view pack_name

7. How to know the dependencies of a package?
npm view mongoose dependencies

8. How to  install a specific version of package?
npm i mongoose@2.4.2

9. How to update local packages?
npm outdated will list.

npm update will take it to wanted version.

10. What are dev dependencies? Which are used for development.
npm i jshint --dev
npm i -D jshint

11. How to uninstall a package?
npm uninstall/un p_name

12. How to work with global packages??
npm i -g package_name

13. How to publish a package?

Run npm init
Create index.js
Add some code
Do npm login
Run npm publish


Package should be unique.

Now can use this.
In another project ,import it and can use.

14. How to update a published package.

Make changes in a file.
Run npm version minor
Run npm publish

Express-

1. What are RESTFUL services?
Used in client server architecture.
Communication happens through http protocols.Server exposes services to http protocol which client requests.

REST stands for Representational State Transfer.
It helps to CREATE,DELETE,UPDATE,DELETE data.(CRUD operations)


There are following HTTP methods-
GET,POST,PUT,DELETE


2. Why Express?
It makes code readable for more url's.
It is very fast and lightweight.
3. Use nodemon to restart server every time if something changes
Command- nodemon file_name.js
4. Need to use environment variables, a file having constant variable.
Using export PORT =5000; or set PORT=5000;

5. Route Parameters.
6. How to test api in postman.


Express-Advanced Topics(MiddleWare,Configuration,Debugging,Templating engines)
1. Middleware 
    Request Processing Pipeline(This is known as request processing pipeline.)
Request---->{.json()}----->{route()}----->Response

A middleware function is basically a function that takes a request object and returns a response to the client or redirect to another function

2. How to create a custom middleware function.
3. Express JS Third party middlewares.

helmet 
passport

