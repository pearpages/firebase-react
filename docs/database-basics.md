# How to

## Authentication

After creating the project in firebase. Go to WEB SETUP.

```js
// firebase.js
import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "...",
    authDomain: "...firebaseapp.com",
    databaseURL: "https://....firebaseio.com",
    projectId: "...",
    storageBucket: "....appspot.com",
    messagingSenderId: "..."
  };
  firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
```

### Load Firebase Config in the React App

```js
import React, { Component } from 'react';
import './App.css';
import { database } from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    database.ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          { JSON.stringify(this.state.data, null, 2)}
        </pre>
      </div>
    );
  }
}

export default App;
```

### Allowing Everybody

Database > Rules

```json
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}
```

## Using a Form

```js
import React, { Component } from 'react';
import './App.css';
import { database } from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    database.ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  }

  handleChange(event) {
    const newData = event.target.value;
    this.setState({
      newData: newData
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    database.ref().child('AMAZINGNEWDATA').set(this.state.newData);
  }

  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          {JSON.stringify(this.state.data, null, 2)}
        </pre>
        <form className="App--form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newData} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;

```

## Navigate Through Database

snapshot

+ child
+ parent
+ key
+ hasChildren
+ forEach
+ set
+ push
+ removes

```js
database.ref().child('AMAZINGNEWDATA').set(this.state.newData);
database.ref().child('AMAZINGNEWDATA').push(this.state.newData);
database.ref().child('/blah/bloh/bleh').push(this.state.newData);
```

```js
import React, { Component } from 'react';
import './App.css';
import { database } from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    };

    this.dataRef = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.dataRef = database.ref('/easfd/asgh/sfaf');
    this.dataRef.on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  }

  handleChange(event) {
    const newData = event.target.value;
    this.setState({
      newData: newData
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.dataRef.push(this.state.newData);
  }

  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          {JSON.stringify(this.state.data, null, 2)}
        </pre>
        <form className="App--form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newData} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
```

## Dom Events

+ dataRef.on('child_added')
+ dataRef.on('value')
+ dataRef.once