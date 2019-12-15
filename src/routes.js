import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from './pages/Splash';
import Menu from './pages/Menu';
import IlicityActivities from './pages/IlicityActivities';
import Animais from './pages/Animais';
import Map from './pages/Map';

import colors from './colors'

const stackNavigation = createStackNavigator({
    Menu:{
        screen: Menu,
        navigationOptions:{
            headerTitle: 'Menu principal',
            headerStyle: {
                backgroundColor: colors.secondaryColor,
            },
            headerTintColor: colors.secondaryTextColor,
            headerTitleStyle: {
                fontWeight: 'normal',
            },  
        }
    },
    IlicityActivities:{
        screen: IlicityActivities,
        navigationOptions:{
            headerTitle: 'Atividades Ilícitas',
            headerStyle: {
                backgroundColor: colors.secondaryColor,
            },
            headerTintColor: colors.secondaryTextColor,
            headerTitleStyle: {
                fontWeight: 'normal',
            },  
        }
    },
    Animais:{
        screen: Animais,
        navigationOptions:{
            headerTitle: 'Animais envolvidos'
        }
    },
    Map:{
        screen: Map,
        navigationOptions:{
            headerTitle: 'Mapa'
        }
    }
});

const switchNavigation = createSwitchNavigator({
    Splash,
    stackNavigation,
});

const Routes = createAppContainer(switchNavigation);

export default Routes;