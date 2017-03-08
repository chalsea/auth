import { AppRegistry } from 'react-native';
import App from './src/app';

AppRegistry. registerComponent('auth', () => App); //register my component with App,
//keep in mind that if you decide to generate this project, with a different name than auth
//you will need to make sure you put the name of the application in 'auth' area to replace that
