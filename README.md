# Open Writing
Open writing is a helpful tool for those who are getting ready to take an international English exam such as Cambridge, IELTS, etc. It provides you with real world assignments for you to complete, and uses OpenAI API to generate feedback on your writing.


## Architecture
The app is formed by a React front end and a Express server, which stores data on MongoDB

The **front end** incorporates
* Responsive CSS (Flexbox, Grid, Media Queries)
* Flux pattern for state management

The **back end** is formed by
* Express server
* Conection to OpenAI API
* Google O-Auth authentication

## How do I run the app on my machine?

### Step 1: Executing the backend

1. Once we have cloned the repo, we open a terminal standing on the project folder
3. npm run dev
4. Ready!

If you enter to http://localhost:3000, you will be able to use the app
