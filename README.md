# Portfolio

### Technologies

- In this simple SPA, I utilized React.
- To run this, enter the command 
```
npm install && npm start
```

### Note
- To run this in Heroku, change the scripts in package.json to
```
"dev": "react-scripts start",
"start": "serve -s build",
"test": "react-scripts test --env=jsdom",
"eject": "react-scripts eject",
"heroku-postbuild": "npm run build"
```

- To run this locally, change the scripts in package.json to
```
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
```