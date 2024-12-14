
👉 created the application using the  ➡️  npm create vite@latest .
👉 created the  📁src folder and setted up the package.json
👉 created the  folders inside  📁src folder  using the  cmd   📁utils / 📁routes / 📁models / 📁middlewares / 📁db / 📁controllers
👉  Created different models file's 📄 inside the models 
👉  Imported the mongoose and express and dotenv 
👉  created the 📄.env file 
👉  created the 📄constants.js file and 📄aap.js in the root directory
👉  Connected the application to the mongoDb database using the mongoose in 👉 📁db/ 📄index.js
👉  Worked on the  index.js file and imported the connection from 👉 📁db/ 📄index.js  and listened the app.js file on the PORT accordingly
👉  inside the  📁 utils  getting the common file which could handle the  response and error collictively  
👉  Created the  📄healthCheck controller file inside the file  worked on the default error handler and    async response
👉  create a route in the 📁 routes names 📄healthcheck.route.js 
👉  Then we imported the health care router in the 📄App.js
👉  Wrote the code for the models inside there respective pages created the  schemas and models 
👉  Imported the npm i mongoose-aggregate-paginate-v2  and then injecting the plugin in the 📄video.models.js
👉  Imported the JWT token and then use the jwt for creating tokens Access Token / Refresh token
👉  Imported the multer and logged in to the cloudnary and did the setup according to the cloudnary in the    📄cloudnary.js  and did the setup for multer in the 📄user.models.js for file handling and changed the location 
👉 Created the 📄user.model.js file and created the controller for the user in 📄user.controller.js route for the user in file 📄user.router.js and then imported it in the app.js file and then used it in the route 
👉 Then in the 📄use.routes.js we are redirecting the route to the 📄user.controllers.js and then inside the user.controller.js I we created the functios for the validations for the registering of the user and for the uploading of the the  coverImage and avatar image . now i am able to see the files in the cloudnary and in my public file too .

👉 created the login function in the 📄 user.controllers.js and to generate a new refresh token and store it in the cookies 

👉 create the logout function in the 📄 user.controllers.js so that we can remove the token insid the localstorage of the browser and also trying to make it managable according to the mobile application .


👉 Creating the 📄auth.middlewares.js





first we create the controllers and then we create the routes and the middlewares and then we put that route  in the  app.js