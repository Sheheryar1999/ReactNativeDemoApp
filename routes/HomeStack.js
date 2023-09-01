import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Details from '../screens/Details';
import About from '../screens/About';

//make it pretty
const Screens = {
// key value pairs for screens
    //naming should be conventional
    
    Home: {
        screen: Home
    },
    
    About:{
        screen: About
    },

    Details: {
        screen: Details
    }
    
}

const HomeStack = createStackNavigator(Screens);

export default createAppContainer(HomeStack);
