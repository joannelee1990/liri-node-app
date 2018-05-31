# Liri-Node-App

### Details on the assignment
This is the creation of an app called LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### Why use Node.js?
First of all, using Node.js as your server technology gives your team a great boost that comes from using the same language on both the front end and the back end. This, means that your team is more efficient and cross-functional, which, in turn, leads to lower development costs. In addition to that, it’s worth mentioning that JavaScript is the most popular programming language, so your application’s codebase will be easier to understand for more engineers. You can also reuse and share the code between the frontend and the backend parts of your application, which speeds up the development process. On top of that, the Node.js community is constantly growing – the number of StackOverflow questions is steadily increasing, so the knowledge base for the technology is widely available. The fact that the whole Node.js technology stack is open-source and free is also great news. Finally, Node offers a great package manager, npm, and the amount of available open-source tools in npm’s registry is massive and growing fast. These are just a few of many advantages of Node.js that you should consider when choosing the technology for your next project. 

### Explanation of files

* 'package.json': this file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a `package.json` file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project.

* '.gitignore': this will tell git not to track these files, and thus they won't be committed to Github.

* 'keys.js': this is where all of your keys are stored from Twitter & Spotify.

* '.env': this file will be used by the `dotenv` package to set what are known as environment variables to the global `process.env` object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github &mdash; keeping our API key information private. If someone wanted to clone your app from github and run it themselves, they would need to supply their own `.env` file for it to work.

* 'random.txt': this is to utilize fs which is a core Node package for reading and writing files.

* 'liri.js': this is used to add code to read and set any environment variables with the dotenv package.

* 'package.json': All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.

* 'package-lock.json': this is automatically generated for any operations where npm modifies either the node_modules tree, or package.json . It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.


There were many examples of similar projects found on Github, Stack Overflow, W3 Schools, the Firebase website which you could use as reference. However just googling certain parts that you are stuck on help as well. (Google Fu!) Also, turning to your classmates helps a great deal. I learned that just by talking it out with classmates, often times you are able to answer your questions yourself!

Try it out on your Terminal/Bash! 
Remember to supply your own '.env' file if you are cloning from GitHub!