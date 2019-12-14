import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Splash from './pages/Splash';
import Menu from './pages/Menu';

const Routes = createAppContainer(
    createSwitchNavigator({
        Splash,
        Menu,
    })
);

export default Routes;