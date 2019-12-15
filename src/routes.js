import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from './pages/Splash';
import Menu from './pages/Menu';
import IlicityActivities from './pages/IlicityActivities';

const stackNavigation = createStackNavigator({
    Menu:{
        screen: Menu,
        navigationOptions:{
            headerTitle: 'Menu principal'
        }
    },
    IlicityActivities:{
        screen: IlicityActivities,
        navigationOptions:{
            headerTitle: 'Atividades Ilícitas'
        }
    },
});

const switchNavigation = createSwitchNavigator({
    Splash,
    stackNavigation,
});

const Routes = createAppContainer(switchNavigation);

export default Routes;