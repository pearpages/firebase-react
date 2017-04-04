import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import ProfileCard from './ProfileCard';
import pick from 'lodash/pick' ;
import map from 'lodash/map';
import './Application.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.usersRef = null;
    this.userRef = null;
    this.state = {
      user: null,
      users: {}
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged( (user) => {
      if (user) {
        this.setState({user});
        this.usersRef = database.ref('/users');
        this.userRef = this.usersRef.child(user.uid);

        this.userRef.once('value').then( (snapshot) => {
          if(snapshot.val()) {
            return
          } else {
            const userData = pick(user, ['displayName', 'photoURL', 'email']);
            this.userRef.set(userData);
          }
        });
      }
    });
  }

  render() {
    const { user, users } = this.state;

    return (
      <div className="App">
        <header className="App--header">
          <h1>Social Animals</h1>
        </header>
        <SignIn />
      </div>
    );
  }
}

export default App;
