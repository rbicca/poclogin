import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Main from './pages/main';

const Routes = createStackNavigator({
  SignIn,
  SignUp,
  Main,
});


const NavComponent = () => {
    const AppContainer = createAppContainer(Routes);

    return <AppContainer />
}

export default NavComponent;