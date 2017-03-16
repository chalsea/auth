import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; // should be above common folder
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDTmLumK2359ubaN_S8dXbssCy_QDVlfgU',
      authDomain: 'auth-18b5a.firebaseapp.com',
      databaseURL: 'https://auth-18b5a.firebaseio.com',
      storageBucket: 'auth-18b5a.appspot.com',
      messagingSenderId: '560390604646'
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
